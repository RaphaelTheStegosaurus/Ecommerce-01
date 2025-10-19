import React from "react";
import Card_Categories from "./card-categories";

interface Props {
  item: string;
}

const Categories_Panel = ({ item }: Props) => {
  return (
    <section className="max-w-screen w-full my-6 p-4 flex flex-col items-center justify-center">
      <h2 className=" text-pretty text-xl md:text-2xl lg:text-4xl font-bold my-3">
        Explora por Categoría
      </h2>
      <p className="text-pretty text-lg md:text-xl  lg:text-2xl py-4 text-center">
        Encuentra exactamente lo que buscas navegando nuestras categorías
      </p>
      <section className="max-w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card_Categories title="Moda" bg="bg-pink-200" icon="💄" stock={25} />
        <Card_Categories title="Moda" bg="bg-pink-200" icon="💄" stock={25} />
        <Card_Categories title="Moda" bg="bg-pink-200" icon="💄" stock={25} />
        <Card_Categories title="Moda" bg="bg-pink-200" icon="💄" stock={25} />
      </section>
    </section>
  );
};
export default Categories_Panel;
