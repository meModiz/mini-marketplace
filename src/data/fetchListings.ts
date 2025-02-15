"use server";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "@/app/firebase";
import { authAdmin } from "@/app/firebaseAdmin";
import { Seller } from "@/types/listing";
import { getDownloadURL, listAll, ref } from "firebase/storage";

export default async function GetListings() {
  const querySnapshot = await getDocs(collection(db, "listings"));

  const listings = await Promise.all(
    querySnapshot.docs.map(async (docSnapshot) => {
      // fetch listing data
      const data = docSnapshot.data();

      //fetch seller data
      let sellerData: Seller = {
        uid: data.sellerUID || "Unknown",
        photoURL: "",
        displayName: "Unknown Seller",
      };
      try {
        const userRecord = await authAdmin.getUser(data.sellerUID);
        sellerData = {
          uid: userRecord.uid,
          photoURL: userRecord.photoURL || "",
          displayName: userRecord.displayName || "Unknown Seller",
        };
      } catch (error) {
        console.error("Error fetching user data:", error);
      }

      // Fetch images
      const listRef = ref(storage, `images/listings/${docSnapshot.id}`);
      let imageUrls: string[] = [];

      try {
        const res = await listAll(listRef);
        imageUrls = await Promise.all(
          res.items.map((itemRef) => getDownloadURL(itemRef))
        );
      } catch (error) {
        console.error("Unexpected error fetching images:", error);
      }

      return {
        id: docSnapshot.id,
        name: data.name,
        price: data.price,
        seller: sellerData,
        imagesURL: imageUrls,
      };
    })
  );

  return listings;
}
