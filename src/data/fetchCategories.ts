"use server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";

export default async function GetCategories() {
  const querySnapshot = await getDocs(collection(db, "categories"));

  const categories = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
    label: doc.data().label,
  }));

  return categories;
}
