import React from "react";
import Featured_Collection from "./featured-collection";
import Deals_Panel from "./deals-panel";
import Categories_Panel from "./categories";

const Main_Home = () => {
  return (
    <main>
      <Featured_Collection items="none" />
      <Deals_Panel items="none" />
      <Categories_Panel item="none" />
    </main>
  );
};
export default Main_Home;
