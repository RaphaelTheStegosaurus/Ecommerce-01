import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  titleMarked?: string;
  classes?: string;
}

const Custom_Header = ({ title, titleMarked, classes, children }: Props) => {
  const spanTitle = () => {
    if (titleMarked) {
      return <span>{titleMarked}</span>;
    }
    return <></>;
  };
  return (
    <header className={`${classes} pl-4 min-h-screen flex flex-col`}>
      <h1 className="py-6 text-4xl flex flex-col font-extrabold">
        {title} {spanTitle()}
      </h1>
      {children}
    </header>
  );
};
export default Custom_Header;
