import React from "react";
import { ListLink } from "../lib/types";

interface Props {
  title: string;
  list: ListLink[];
}

const List_Link = ({ title, list }: Props) => {
  const ListTags = list.map((value, index) => {
    return (
      <li className="my-0.5 font-light" key={index}>
        <a
          className="hover:text-white hover:font-semibold  transition-colors cursor-pointer"
          href={value.link}
        >
          {value.title}
        </a>
      </li>
    );
  });
  return (
    <ul className="px-4">
      <h5 className="font-extrabold mb-2">{title}</h5>
      {ListTags}
    </ul>
  );
};
export default List_Link;
