import React from "react";
import Social_Media_Button from "./social-media";
import List_Link from "./list-links";
import { LinkList } from "../lib/content";

export default function Footer() {
  return (
    <footer className="bg-pink-400 w-screen overflow-x-hidden pt-10">
      <section className="max-w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 overflow-x-hidden">
        <section className="flex flex-col  px-6">
          <h4 className="mb-4 font-extrabold">Pastel Shop</h4>
          <p>
            Tu destino para productos elegantes y diseño minimalista. Calidad y
            estilo en cada detalle.
          </p>
          <ul className=" flex flex-row">
            <Social_Media_Button name="Facebook" />
            <Social_Media_Button name="Instagram" />
            <Social_Media_Button name="Twitter" />
            <Social_Media_Button name="Youtube" />
            <Social_Media_Button name="Linkedin" />
          </ul>
        </section>
        <List_Link title="Tienda" list={LinkList.Tienda} />
        <List_Link title="Ayuda" list={LinkList.Ayuda} />
        <section>
          <h4 className="mb-4 font-extrabold">Newletter</h4>
          <p>Recibe ofertas exclusivas y novedades</p>
        </section>
        <form className="email">
          <input type="email" name="user_email" id="user_email" />
          <button type="submit"></button>
        </form>
      </section>
      <div className="autor max-w-screen flex flex-col  items-center py-12">
        <p className="font-extralight text-yellow-200 ">
          © 2024 Pastel Shop. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
