import { LinkList } from "@/app/lib/content";

const List_Links = () => {
  const NavLinks = LinkList.Tienda.map((value, index) => {
    return (
      <li key={index}>
        <a href={value.link}>{value.title}</a>
      </li>
    );
  });
  return (
    <ul className="md:flex md:flex-row hidden gap-5 text-lg">{NavLinks}</ul>
  );
};
export default List_Links;
