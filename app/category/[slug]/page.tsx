interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.slug;
  return (
    <div>
      <h1>Categoría: {categorySlug.replace("-", " ")}</h1>
    </div>
  );
}
