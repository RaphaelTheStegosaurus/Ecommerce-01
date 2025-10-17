export default function Home() {
  return (
    <>
      <header className="pl-4 min-h-screen flex flex-col">
        <h1 className=" py-6 text-4xl flex flex-col font-extrabold">
          Nueva Colección
          <span className="">Primavera 2024</span>
        </h1>
        <p className="my-6 font-light text-2xl">
          Descubre nuestra selección curada de productos elegantes con diseños
          minimalistas y colores que inspiran.
        </p>
        <div className="homeButtones flex flex-row gap-2">
          <a
            className="text-white bg-pink-400 px-6 py-3 rounded-full text-xl"
            href="#"
          >
            Explorar Ahora
          </a>
          <a className="px-6 py-3 rounded-full text-xl" href="#">
            Ver Ofertas
          </a>
        </div>
      </header>
      <main></main>
    </>
  );
}
