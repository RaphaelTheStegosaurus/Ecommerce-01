import React from "react";

interface Props {
  children: React.ReactNode;
}

const Custom_Header = ({ children }: Props) => {
  return (
    <header>
      <h1></h1>
      {children}
    </header>
  );
};
export default Custom_Header;
