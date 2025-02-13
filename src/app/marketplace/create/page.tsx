"use client";
import { auth, db } from "@/app/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateListing() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const router = useRouter();

  async function createListing() {
    try {
      const user = await auth.currentUser;
      if (user === null) return;
      const docRef = await addDoc(collection(db, "listings"), {
        name: name,
        price: price,
        sellerUID: user.uid,
      });
      router.push(
        `/marketplace/upload?id=${docRef.id}&name=${name}&price=${price}`
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="flex flex-col px-80 py-3 gap-6">
      <h1 className="text-H2 text-gray-900">Create your listing</h1>
      <div className="flex flex-col items-start">
        <input
          name="nameInput"
          placeholder="Listing title"
          className="border border-gray-300 w-96 text-base text-gray-400 pl-4 py-3 rounded-lg focus:outline-none"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="priceInput"
          placeholder="Price of item"
          className="border border-gray-300 w-96 text-base text-gray-400 pl-4 py-3 rounded-lg focus:outline-none"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button
          onClick={createListing}
          className="bg-PrimaryColor hover:bg-PrimaryColorHover rounded-lg text-white px-5 py-2.5"
        >
          Next
        </button>
      </div>
    </div>
  );
}
