import React from "react";

interface Props {
  title: string;
  icon:
    | "❤️"
    | "🍂"
    | "🌺"
    | "🏠"
    | "🌛"
    | "🌞"
    | "🌧️"
    | "🛁"
    | "🏖️"
    | "✈️"
    | "❄️"
    | "🚺"
    | "🚹"
    | "🎅"
    | "👻"
    | "🥳"
    | "👙"
    | "👠"
    | "👑"
    | "⚽"
    | "💄"
    | "🧩"
    | "🖥️"
    | "👗"
    | "📚";
  bg:
    | "bg-emerald-200"
    | "bg-cyan-200"
    | "bg-lime-200"
    | "bg-amber-200"
    | "bg-pink-200"
    | "bg-purple-200"
    | "bg-blue-200"
    | "bg-green-200"
    | "bg-yellow-200"
    | "bg-red-200";
  stock: number;
}

const Card_Categories = ({ title, icon, bg, stock }: Props) => {
  return (
    <article className="group hover:shadow-xl transition ease-in-out duration-500 pb-4 w-full bg-white rounded-3xl overflow-hidden flex-col justify-center items-center">
      <div
        className={`${bg}  w-full grid place-content-center p-8 aspect-video`}
      >
        <span className="text-6xl group-hover:scale-125 ease-in-out duration-500 transition">
          {icon}
        </span>
      </div>
      <h4 className="text-lg font-semibold text-center mt-6 mb-2">{title}</h4>
      <h5 className="text-sm text-center text-gray-500">{stock} productos</h5>
    </article>
  );
};
export default Card_Categories;
