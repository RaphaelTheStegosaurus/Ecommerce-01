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
    <nav>
      <span> Shop</span>
      <ul>{NavLinks}</ul>
      <div className="searchbox">
        <button>
          <CiSearch />
        </button>
        <input type="search" name="searchbox" id="searchbox" />
      </div>
      <a href="#">
        <CiUser />
      </a>
      <a href="#">
        <CiHeart />
      </a>
      <a href="#">
        <CiShoppingCart />
      </a>
      <a href="#">
        <CiMenuBurger />
        <IoMdClose />
      </a>
    </nav>
  );
};
export default Navbar;
