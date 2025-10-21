import { LinkList } from "@/app/lib/content";
import Link from "next/link";

const List_Links = () => {
  const NavLinks = LinkList.Tienda.map((value, index) => {
    return (
      <li key={index}>
        <Link
          className="hover:text-white transition duration-500"
          href={value.link}
        >
          {value.title}
        </Link>
      </li>
    );
  });
  return (
    <ul className="md:flex md:flex-row hidden gap-5 text-lg">{NavLinks}</ul>
  );
};
export default List_Links;
