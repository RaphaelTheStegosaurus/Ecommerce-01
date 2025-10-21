import { LinkList } from "@/app/lib/content";
import Link from "next/link";
interface Props {
  classes: string | undefined;
}
const List_Links = ({ classes }: Props) => {
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
  return <ul className={`${classes} gap-5 text-lg`}>{NavLinks}</ul>;
};
//
export default List_Links;
