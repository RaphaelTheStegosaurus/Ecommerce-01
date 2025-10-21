import React from "react";
import { CiSearch } from "react-icons/ci";
interface Props {
  clases?: string;
}
const SearchBox = ({ clases }: Props) => {
  return (
    <div
      className={`${clases} transition duration-500 ease-in-out flex flex-row rounded-full shadow-sm border-2  border-pink-400 focus-within:border-white items-center`}
    >
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
  );
};
export default SearchBox;
