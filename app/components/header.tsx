import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  titleMarked?: string;
  classes?: string;
  h1classes?: string;
}

const Custom_Header = ({
  title,
  titleMarked,
  classes,
  h1classes,
  children,
}: Props) => {
  const spanTitle = () => {
    if (titleMarked) {
      return <span className="capitalize">{titleMarked}</span>;
    }
    return <></>;
  };
  return (
    <header className={`${classes} pl-4 min-h-screen flex flex-col`}>
      <h1 className={`${h1classes} py-6 text-4xl font-extrabold`}>
        {title} {spanTitle()}
      </h1>
      {children}
    </header>
  );
};
export default Custom_Header;
