import Custom_Header from "./components/header";
import Main_Home from "./components/home/main-home";

export default function Home() {
  return (
    <>
      <Custom_Header
        title="Nueva Colección"
        titleMarked="Primavera 2024"
        classes="justify-center"
      >
        <p className="md:w-1/2 w-full my-6 font-light text-2xl">
          Descubre nuestra selección curada de productos elegantes con diseños
          minimalistas y colores que inspiran.
        </p>
        <div className="flex flex-row gap-4">
          <a
            className="transition ease-in-out duration-500 border-2 hover:border-pink-400 border-white hover:text-pink-400 text-white hover:bg-white bg-pink-400 px-6 py-3 rounded-full text-xl"
            href="#"
          >
            Explorar Ahora
          </a>
          <a
            className="transition ease-in-out duration-500 border-2 hover:border-pink-400 border-white hover:text-pink-400 text-white hover:bg-white px-6 py-3 rounded-full text-xl"
            href="#"
          >
            Ver Ofertas
          </a>
        </div>
      </Custom_Header>
      <Main_Home />
    </>
  );
}
