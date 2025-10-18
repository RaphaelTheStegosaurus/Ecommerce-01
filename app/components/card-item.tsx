import Image from "next/image";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

interface Props {
  title: string;
  price: number;
  image: string;
  deals_price?: number;
  deal_percentage?: number;
  special_label?: string;
}

const Card_Item = ({
  title,
  price,
  image,
  deals_price,
  deal_percentage,
  special_label,
}: Props) => {
  const prices_label = () => {
    if (deals_price) {
      return (
        <div className="w-full p-2 flex flex-row items-center justify-items-start gap-6">
          <h4 className="font-bold text-xl">${deals_price}</h4>
          <span className="font-medium text-md text-gray-500 line-through">
            ${price}
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <h4 className="font-bold text-xl">${price}</h4>
        </div>
      );
    }
  };
  const LabelDealPercentage = () => {
    if (deal_percentage) {
      return (
        <span className="absolute bg-orange-400 px-4 py-2 rounded-full text-white text-lg right-5 top-5">{`-${deal_percentage}%`}</span>
      );
    }
    return;
  };
  const Special_Label = () => {
    if (special_label) {
      return (
        <span className="absolute bg-pink-400 px-4 py-2 rounded-full text-white text-lg left-5 top-5">
          {special_label}
        </span>
      );
    }
    return;
  };
  return (
    <article className="relative bg-white p-4 overflow-hidden rounded-3xl w-full md:w-1/2 lg:w-1/3">
      <>{LabelDealPercentage()}</>
      <>{Special_Label()}</>
      <img
        className="aspect-square object-cover object-center"
        src={image}
        alt={title}
      />
      <h3 className="font-medium uppercase text-lg my-3 pl-2">{title}</h3>
      <>{prices_label()}</>
      <a
        className=" transition-colors flex flex-row w-full justify-center items-center gap-10 hover:bg-transparent bg-pink-400 py-2 border-2 rounded-full hover:text-pink-400 text-white"
        href="#"
      >
        <CiShoppingCart className="text-2xl" />
        Agregar
      </a>
    </article>
  );
};
export default Card_Item;
