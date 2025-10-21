import React from "react";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
interface Props {
  icon: "heart" | "user" | "cart";
  link: string;
  classes?: string;
}

const Icon_Button = ({ icon, link, classes }: Props) => {
  const ICON_LIST = {
    heart: <CiHeart />,
    user: <CiUser />,
    cart: <CiShoppingCart />,
  };
  return (
    <a
      className={`${classes} transition duration-500 ease-in-out hover:bg-white p-3 rounded-2xl text-2xl`}
      href={link}
    >
      {ICON_LIST[icon]}
    </a>
  );
};
//
export default Icon_Button;
