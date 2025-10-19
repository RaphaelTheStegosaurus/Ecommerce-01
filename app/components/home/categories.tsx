import React from "react";

interface Props {
  item: string;
}

const Categories_Panel = ({ item }: Props) => {
  return (
    <section>
      <h2>Explora por Categoría</h2>
      <p>Encuentra exactamente lo que buscas navegando nuestras categorías</p>
    </section>
  );
};
export default Categories_Panel;
