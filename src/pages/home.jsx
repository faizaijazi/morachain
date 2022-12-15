import React from "react";
import Header from "../components/home/header";
import Morachain from "../components/home/morachain";
import Calculator from "../components/home/calculator";
const Home = () => {
  return (
   <div>
     <div
      style={{
        paddingTop: "10px",
        background: "linear-gradient(90deg,#e1b646,#925a06,#e1b646)",
        backgroundImage:
          "linear-gradient(90deg, rgb(225, 182, 70), rgb(146, 90, 6), rgb(225, 182, 70))",
      }}
      className="h-[220vh] md:h-[135vh]"
    >
      <Header />
      <Morachain />
      <Calculator />
      </div>
    </div>
  );
};

export default Home;
