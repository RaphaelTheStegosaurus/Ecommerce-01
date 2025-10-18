import React from "react";
import { LinkList } from "../lib/content";
import {
  CiHeart,
  CiMenuBurger,
  CiSearch,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const NavLinks = LinkList.Tienda.map((value, index) => {
    return (
      <li key={index}>
        <a href={value.link}>{value.title}</a>
      </li>
    );
  });
  return (
    <nav className="bg-orange-400 max-w-screen px-4 py-4 flex flex-row items-center justify-between sticky top-0">
      <h2 className="text-2xl">Shop</h2>
      <ul className="md:flex md:flex-row hidden gap-5 text-lg">{NavLinks}</ul>
      <div className="hidden md:flex md:flex-row searchbox rounded-full shadow-sm border-2  border-orange-300 focus-within:border-white items-center">
        <button className="w-5 h-5 text-white font-bold text-md ml-2">
          <CiSearch />
        </button>
        <input
          className="w-full py-1 px-3 text-white leading-tight focus:outline-none bg-transparent"
          type="search"
          name="searchbox"
          id="searchbox"
        />
      </div>
      <a
        href="#"
        className="hover:bg-white p-3 rounded-2xl transition-colors text-2xl hidden md:block"
      >
        <CiUser />
      </a>
      <a
        className="hover:bg-white p-3 rounded-2xl transition-colors text-2xl hidden md:block"
        href="#"
      >
        <CiHeart />
      </a>
      <a
        className="hover:bg-white p-3 rounded-2xl transition-colors text-2xl hidden md:block"
        href="#"
      >
        <CiShoppingCart />
      </a>
      <a
        className="hover:bg-white p-3 rounded-2xl transition-colors text-2xl md:hidden"
        href="#"
      >
        <CiMenuBurger />
        <IoMdClose />
      </a>
    </nav>
  );
};
export default Navbar;
