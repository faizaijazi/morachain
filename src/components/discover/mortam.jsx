import React from "react";
import discoverImage from "../../assets/discoverGlass.png";
import boy from "../../assets/boy.png";
import girl1 from "../../assets/girl1.png";
import girl2 from "../../assets/girl2.png";
import girl3 from "../../assets/girl3.png";
const Mortam = () => {
  let bgImage = `url(${discoverImage})`;
  return (
    <div
      style={{ background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)" }}
    >
      <div
        style={{
          background: bgImage,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-[40px]"
      >
        <div className="mb-[20px]">
          <div className="flex flex-col items-center px-[20px]">
            <h1 className="text-[30px] md:text-[35px] font-bold text-center">
              Meet the MOR TAM
            </h1>
            <p className="mt-[30px] w-[85%] md:text-[18px] text-center text-black font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen a book.
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-between flex-wrap px-[80px] mt-[50px]">
          <div>
            <img src={boy} alt="" />
          </div>
          <div>
            <img src={girl1} alt="" />
          </div>
          <div>
            <img src={girl2} alt="" />
          </div>
          <div>
            <img src={girl3} alt="" />
          </div>
        </div>
        <div className="flex justify-center mt-[70px]">
          <button
            style={{
            backgroundColor: "#e5b13c",
            }}
            className="px-[25px] py-[10px] text-[20px] font-bold rounded-[8px]"
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mortam;
