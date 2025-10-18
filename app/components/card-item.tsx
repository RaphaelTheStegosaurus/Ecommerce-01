import Image from "next/image";
import React from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

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
        <span className="z-5 absolute bg-orange-400 px-4 py-2 rounded-full text-white text-lg right-5 top-5">{`-${deal_percentage}%`}</span>
      );
    }
    return;
  };
  const Special_Label = () => {
    if (special_label) {
      return (
        <span className="z-5 absolute bg-pink-400 px-4 py-2 rounded-full text-white text-lg left-5 top-5">
          {special_label}
        </span>
      );
    }
    return;
  };
  return (
    <article className="hover:shadow-2xl duration-500 relative bg-white p-4 overflow-hidden rounded-3xl w-full md:w-1/2 lg:w-1/3">
      <>{LabelDealPercentage()}</>
      <>{Special_Label()}</>
      <div className="z-0 imagecontainer overflow-hidden aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full transition-transform duration-500 hover:scale-110 scale-100  object-cover object-center"
        />
      </div>
      <h3 className="font-medium uppercase text-lg my-3 pl-2">{title}</h3>
      <a
        href="#"
        className=" absolute right-5 bottom-1/4 p-3 transition-all duration-500 text-2xl border-2 hover:border-white border-pink-400 hover:bg-pink-400 text-pink-400 hover:text-white rounded-full"
      >
        <CiHeart />
      </a>
      <>{prices_label()}</>
      <a
        className=" transition-colors duration-500 flex flex-row w-full justify-center items-center gap-10 hover:bg-transparent bg-pink-400 py-2 border-2 rounded-full hover:text-pink-400 text-white"
        href="#"
      >
        <CiShoppingCart className="text-2xl" />
        Agregar
      </a>
    </article>
  );
};
export default Card_Item;
