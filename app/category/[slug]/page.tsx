import Custom_Header from "@/app/components/header";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.slug;
  return (
    <Custom_Header>
      <h1>Categoría: {categorySlug.replace("-", " ")}</h1>
    </Custom_Header>
  );
}
