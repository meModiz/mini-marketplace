import CategoryCard from "@/components/CategoryCard";
import { useEffect, useState } from "react";
import fetchCategories from "@/data/fetchCategories";
import categories from "@/data/categories.json";
import { Category } from "@/types/category";

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  async function getCategories() {
    const data = await fetchCategories();
    setCategories(data);
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="flex flex-row w-full justify-between">
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          name={category.name}
          label={category.label}
        />
      ))}
    </div>
  );
}
