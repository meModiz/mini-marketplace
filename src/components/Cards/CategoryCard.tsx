import { Category } from "@/types/category";
import Image from "next/image";

export default function CategoryCard({ name, label }: Category) {
  return (
    <div className="flex flex-col overflow-hidden w-49 h-48 bg-transparent transform transition-transform duration-300 hover:scale-105">
      <div className="w-full flex-1 overflow-hidden">
        <Image
          alt={label}
          src={"/" + name + ".webp"}
          width={196}
          height={130}
          className="rounded-t-xl"
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center bg-white dark:bg-white/5 text-base text-gray-900 dark:text-white rounded-b-xl h-1/3 text-center p-2">
        {label}
      </div>
    </div>
  );
}
