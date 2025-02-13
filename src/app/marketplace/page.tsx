"use client";
import fetchCategories from "@/data/fetchCategories";
import { Category } from "@/types/category";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function CategoryButton({ name, label }: Category) {
  const pathname = usePathname();
  const isMainPage = pathname === "/" + name;
  return (
    <Link
      href={"/marketplace/" + name}
      className={`flex items-center justify-center text-center border ${
        isMainPage ? "border-gray-900" : "border-gray-200"
      } rounded-3xl`}
    >
      <span className="text-sm text-gray-900 max-w-32 h-10 truncate py-2.5 px-5">
        {label}
      </span>
    </Link>
  );
}

export default function MainPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  async function getCategories() {
    const data = await fetchCategories();
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex flex-col px-80 py-3 gap-6">
      <h1 className="text-H2 text-gray-900">Marketplace catalog</h1>
      <div className="flex flex-row items-center gap-2">
        <CategoryButton
          key={"marketplace"}
          name={"marketplace"}
          label={"All Products"}
        />
        {categories.map((category) => (
          <CategoryButton
            key={category.name}
            name={category.name}
            label={category.label}
          />
        ))}
      </div>
    </div>
  );
}
