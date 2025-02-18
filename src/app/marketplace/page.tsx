"use client";
import fetchCategories from "@/data/fetchCategories";
import { Category } from "@/types/category";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Listing } from "@/types/listing";
import fetchListings from "@/data/fetchListings";
import ListingCard from "@/components/Cards/ListingsCard";

function CategoryButton({ name, label }: Category) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const isMainPage = category === name;
  return (
    <Link
      href={"/marketplace?category=" + name}
      className={`flex items-center justify-center text-center border ${
        isMainPage
          ? "border-gray-900 dark:border-white"
          : "border-gray-200 dark:border-gray-700"
      } rounded-3xl`}
    >
      <span className="text-sm text-gray-900 dark:text-white max-w-32 h-10 truncate py-2.5 px-5">
        {label}
      </span>
    </Link>
  );
}

export default function MainPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [categories, setCategories] = useState<Category[]>([]);
  const [listings, setListings] = useState<Listing[]>([]);

  async function getCategories() {
    const data = await fetchCategories();
    setCategories(data);
  }

  async function getListings() {
    const data = await fetchListings();
    setListings(data);
  }

  useEffect(() => {
    getListings();
  }, [category]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex flex-col items-start gap-6 bg-white dark:bg-gray-900 h-screen pt-3 pl-72">
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-H2 text-gray-900 dark:text-white">
          Marketplace catalog
        </h1>
        <Link
          href={"/marketplace/create"}
          className={`flex flex-row text-center bg-gray-600 hover:bg-gray-500 rounded-lg px-3 py-2`}
        >
          <span className="text-sm text-white">Create New Listing</span>
        </Link>
      </div>
      <div className="flex flex-row items-center gap-2">
        <CategoryButton
          key={"all_products"}
          name={"all_products"}
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
      <div className="flex flex-row gap-5 flex-wrap w-5/6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            id={listing.id}
            name={listing.name}
            price={listing.price}
            seller={listing.seller}
            imagesURL={listing.imagesURL}
          />
        ))}
      </div>
    </div>
  );
}
