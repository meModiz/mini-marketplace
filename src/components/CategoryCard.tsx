import { Category } from "@/types/category";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CategoryCard({ name, label }: Category) {
  const router = useRouter();
  return (
    <div
      className="flex flex-col w-49 h-44.5 bg-transparent transform transition-transform duration-300 hover:scale-105"
      onClick={() => router.push("/marketplace")} // Make routing with filtration into marketplace
    >
      <div className="w-full h-32.5 overflow-hidden rounded-t-xl">
        <Image alt={label} src={`/${name}.webp`} width={196} height={130} />
      </div>
      <div className="text-sm font-medium text-gray-900 bg-white dark:bg-white/10 dark:text-white flex-1 flex items-center justify-center text-center w-full rounded-b-xl">
        {label}
      </div>
    </div>
  );
}
