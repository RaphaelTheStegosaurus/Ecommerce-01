import { spawn } from "child_process";
import { Artifika } from "next/font/google";
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
        <div>
          <h4>{deals_price}</h4>
          <span>{price}</span>{" "}
        </div>
      );
    } else {
      return (
        <div>
          <h4>{price}</h4>
        </div>
      );
    }
  };
  const LabelDealPercentage = () => {
    if (deal_percentage) {
      return <span>{`-${deal_percentage}%`}</span>;
    }
    return;
  };
  const Special_Label = () => {
    if (special_label) {
      return <span>{special_label}</span>;
    }
    return;
  };
  return (
    <article>
      <>{LabelDealPercentage}</>
      <>{Special_Label}</>
      <Image src={image} alt={title} />
      <h3>{title}</h3>
      <>{prices_label}</>
      <a href="#">
        <CiShoppingCart />
        Agregar
      </a>
    </article>
  );
};
