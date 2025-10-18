import React from "react";

interface Props {
  items: string;
}

const Deals_Panel = ({ items }: Props) => {
  return (
    <section className="max-w-full flex flex-col justify-center items-center px-4 my-10 py-10">
      <h2 className="font-bold text-2xl  md:text-3xl lg:text-4xl my-2 text-pretty">
        ¡Envío Gratis en Pedidos +$50!
      </h2>
      <p className="font-medium text-lg md:xl lg:text-2xl text-pretty my-4">
        Aprovecha esta oferta especial solo por tiempo limitado
      </p>
      <a
        href="#"
        className="transition-all duration-500 rounded-full text-2xl my-6 px-6 py-4 border-2 hover:border-pink-400 border-white  hover:bg-white bg-pink-400 hover:text-pink-400 text-white "
      >
        Comprar Ahora
      </a>
    </section>
  );
};
export default Deals_Panel;
