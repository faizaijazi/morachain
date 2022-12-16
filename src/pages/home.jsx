import React from "react";
import Header from "../components/home/header";
import Morachain from "../components/home/morachain";
import Calculator from "../components/home/calculator";
import Tokenmora from "../components/home/token";
import Worldfirst from "../components/home/worldfirst";
import Tokenization from "../components/home/tokenization";
import Metaverse from "../components/home/metaverse";
import Whymorchain from "../components/home/whymorchain";
const Home = () => {
  return (
    <>
    <div className="bg-slate-500 ">
     <div
      style={{
        paddingTop: "10px",
        background: "linear-gradient(90deg,#e1b646,#925a06,#e1b646)",
        backgroundImage:
          "linear-gradient(90deg, rgb(225, 182, 70), rgb(146, 90, 6), rgb(225, 182, 70))",
      }}
      className="bg-slate-800"
    >
      <div>
      <Header />
      <Morachain />
      <Calculator />
      </div>
      </div>
    </div>
      <Tokenmora />
      {/* <Worldfirst /> */}
      <Tokenization />
      <Metaverse />
      <Whymorchain />
    </>
  );
};

export default Home;
