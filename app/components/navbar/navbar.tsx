"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import List_Links from "./list-links";
import Icon_Button from "./icon-button";
import SearchBox from "./searchbox";
const Navbar = () => {
  const [isTheMenuActive, setisTheMenuActive] = useState(false);
  return (
    <>
      <nav className="z-20 bg-orange-400 max-w-screen px-4 py-4 flex flex-row items-center justify-between sticky top-0">
        <h2 className="text-2xl">Shop</h2>
        <List_Links classes="md:flex md:flex-row hidden" />
        <SearchBox clases="hidden md:flex md:flex-row" />
        <Icon_Button icon="user" link="#" classes="hidden md:block" />
        <Icon_Button icon="heart" link="#" classes="hidden md:block" />
        <Icon_Button icon="cart" link="#" classes="hidden md:block" />
        <button
          onClick={() => {
            setisTheMenuActive(!isTheMenuActive);
          }}
          className="hover:bg-white p-3 rounded-2xl transition-colors text-2xl md:hidden"
        >
          {isTheMenuActive ? <IoMdClose /> : <CiMenuBurger />}
        </button>
      </nav>
      <nav
        className={`${
          isTheMenuActive ? "translate-y-0" : "-translate-y-full"
        }  flex flex-col items-center justify-end pb-8 transition duration-500 ease-in-out z-10 fixed w-screen h-screen top-0 left-0 bg-amber-400 md:hidden`}
      >
        <SearchBox clases="md:hidden flex flex-row mb-4" />
        <div className="md:hidden flex flex-row w-full items-center justify-evenly">
          <Icon_Button icon="user" link="#" classes="md:hidden block" />
          <Icon_Button icon="heart" link="#" classes="md:hidden block" />
          <Icon_Button icon="cart" link="#" classes="md:hidden block" />
        </div>
        <List_Links classes="flex flex-col md:hidden" />
      </nav>
    </>
  );
};
export default Navbar;
