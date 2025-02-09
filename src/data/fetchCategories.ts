import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { Category } from "@/types/category";

export default async function GetCategories(): Promise<Category[]> {
  const querySnapshot = await getDocs(collection(db, "categories"));

  const categories = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
    label: doc.data().label,
  }));

  return categories;
}
