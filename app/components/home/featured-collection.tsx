// "use client";
import React from "react";
import Card_Item from "../card-item";
const Featured_Collection = () => {
  return (
    <section className="max-w-full flex flex-col items-center">
      <h2>Productos Destacados</h2>
      <p>
        Descubre nuestra selección de productos más populares, cuidadosamente
        elegidos para ti
      </p>
      <section>
        <Card_Item
          image="/media/items/item-01/pic01.jpg"
          title="t-shirt"
          price={20.99}
          deals_price={15.99}
          deal_percentage={25}
          special_label="Nuevo"
        />
      </section>
    </section>
  );
};
export default Featured_Collection;
