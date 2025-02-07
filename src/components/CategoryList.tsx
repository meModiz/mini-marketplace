import categories from "@/data/categories.json";
import CategoryCard from "@/components/CategoryCard";
export default function CategoryList() {
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
