import { categoriesData } from "@/app/lib/categoriesData";
import CategoryContent from "@/app/ui/category/category-content";
import CategoryControls from "@/app/ui/category/category-controls";

interface CategoriesProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ ...props }: CategoriesProps) {
  const params = await props.params;
  const id = params.id;
  const currentIndex = categoriesData.findIndex((c) => c.label === id);

  if (currentIndex === -1) return <h2>Categoria não encontrada</h2>;

  const categoryData = categoriesData[currentIndex];
  const prevCategory = categoriesData[currentIndex - 1];
  const nextCategory = categoriesData[currentIndex + 1];

  return (
    <main>
      <div>
        <CategoryContent data={categoryData} />
        <CategoryControls prev={prevCategory} next={nextCategory} />
      </div>
    </main>
  );
}
