import { categoriesData } from "@/app/lib/categoriesData";
import CategoryContent from "@/app/ui/category/category-content";
import CategoryControls from "@/app/ui/category/category-controls";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const category = categoriesData.find((c) => c.label === id);

  if (!category) {
    return {
      title: "Página não encontrada",
      description: "Essa categoria não existe.",
    };
  }

  const title =
    category.label.charAt(0).toUpperCase() +
    category.label.slice(1).toLowerCase();

  return {
    title: title,
    description: `Explore fotos da categoria ${category.label}.`,
  };
}

interface CategoriesProps {
  params: { id: string };
}

export default function Page({ ...props }: CategoriesProps) {
  const params = props.params;
  const id = params.id;
  const currentIndex = categoriesData.findIndex((c) => c.label === id);

  if (currentIndex === -1) notFound();

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
