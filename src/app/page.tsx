import Image from "next/image";
import categories from "@/data/categories.json";

type Category = {
  categoryName: string;
  categoryLabel: string;
};

function CategoryCard({ categoryName, categoryLabel }: Category) {
  return (
    <div className="flex flex-col w-49 h-44.5 bg-transparent">
      <div className="w-full h-32.5 overflow-hidden rounded-t-xl">
        <Image
          alt={categoryLabel}
          src={`/${categoryName}.webp`}
          width={196}
          height={130}
        />
      </div>
      <div className="text-sm font-medium text-gray-900 bg-white dark:bg-white/10 dark:text-white flex-1 flex items-center justify-center text-center w-full rounded-b-xl">
        {categoryLabel}
      </div>
    </div>
  );
}

function CategoryList() {
  return (
    <div className="flex flex-row w-full justify-between">
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          categoryName={category.name}
          categoryLabel={category.label}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col h-204 justify-center gap-18">
      <div className="max-w-4xl">
        <h1 className="text-D3 text-gray-900 dark:text-white">
          Buy & Sell Quality Second-Hand Electronics with Ease
        </h1>
        <h2 className="text-lg text-gray-600 dark:text-gray-300">
          Discover reliable pre-owned smartphones, laptops, gaming gear, and
          more. Find the best deals or give your old devices a second life in a
          trusted marketplace.
        </h2>
      </div>
      <CategoryList />
    </div>
  );
}
