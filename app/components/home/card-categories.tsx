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
    <article>
      <div className={`${bg} `}>
        <span>{icon}</span>
      </div>
      <h4>{title}</h4>
      <h5>{stock} productos</h5>
    </article>
  );
};
export default Card_Categories;
