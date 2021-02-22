import React, { useContext } from "react";
import AppContext from "./context";

const Home = () => {
  const count = useContext(AppContext);

  return (
    <div>
      <p>Home</p>
      <p>{count}</p>
    </div>
  );
};

export default Home;
