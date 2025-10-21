import Custom_Header from "@/app/components/header";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.slug;
  const CATEGORY_NAME = categorySlug.replace("-", " ");
  return (
    <Custom_Header
      title={`Categoria:`}
      titleMarked={CATEGORY_NAME}
      classes="items-center"
    >
      <p className=""></p>
    </Custom_Header>
  );
}
