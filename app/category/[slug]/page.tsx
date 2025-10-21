import Custom_Header from "@/app/components/header";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categorySlug = slug;
  const CATEGORY_NAME = categorySlug.replace("-", " ");
  return (
    <>
      <Custom_Header
        title={`Categoria:`}
        titleMarked={CATEGORY_NAME}
        classes="items-center"
        h1classes="flex flex-row gap-6"
      >
        <p className="text-lg md:text-xl lg:text-2xl">
          Todo los artículos que están en la categoría de {`"${CATEGORY_NAME}"`}
        </p>
      </Custom_Header>
    </>
  );
}
