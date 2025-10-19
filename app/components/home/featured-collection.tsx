import React from "react";
import Card_Item from "../card-item";
const Featured_Collection = () => {
  return (
    <section className="max-w-full flex flex-col items-center px-4">
      <h2 className="max-w-full text-3xl font-bold my-2">
        Productos Destacados
      </h2>
      <p className="max-w-full text-xl my-2 text-pretty text-center">
        Descubre nuestra selección de productos más populares, cuidadosamente
        elegidos para ti
      </p>
      <section className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 px-4 gap-6">
        <Card_Item
          image="/media/items/item-01/pic01.jpg"
          title="t-shirt"
          price={20.99}
          deals_price={15.99}
          deal_percentage={25}
          special_label="Nuevo"
        />
        <Card_Item
          image="/media/items/item-01/pic01.jpg"
          title="t-shirt"
          price={20.99}
          deals_price={15.99}
          deal_percentage={25}
          special_label="Nuevo"
        />
        <Card_Item
          image="/media/items/item-01/pic01.jpg"
          title="t-shirt"
          price={20.99}
          deals_price={15.99}
          deal_percentage={25}
          special_label="Nuevo"
        />
        <Card_Item
          image="/media/items/item-01/pic01.jpg"
          title="t-shirt"
          price={20.99}
          deals_price={15.99}
          deal_percentage={25}
          special_label="Nuevo"
        />
        <Card_Item
          image="/media/items/item-01/pic01.jpg"
          title="t-shirt"
          price={20.99}
          deals_price={15.99}
          deal_percentage={25}
          special_label="Nuevo"
        />
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
