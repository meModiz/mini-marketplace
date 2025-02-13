"use client";

import CategoryList from "@/components/CategoryList";
import HeaderText from "@/components/Miscs/HeaderText";
import TrendingListingCard from "@/components/Cards/ListingsCard";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col h-204 justify-center gap-18 px-80 py-3">
        <HeaderText />
        <CategoryList />
      </div>
      <div className="flex flex-col bg-white dark:bg-gray-900 h-204 py-28 px-80 gap-10">
        <h2 className="text-H3 text-gray-900 dark:text-white">
          Explore trending listings
        </h2>
      </div>
    </div>
  );
}
