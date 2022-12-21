import React from "react";
import dog1 from "../../assets/dog1.png"
import dog2 from "../../assets/dog2.png"
import dog3 from "../../assets/dog3.png"
import dog4 from "../../assets/dog4.png"
const Nfts = () => {
  return (
    <>
      <div className="mb-[20px] mt-[100px] 2xl:px-[160px]">
        <div className="flex flex-col items-center px-[20px]">
          <h1 className="text-[30px] md:text-[50px] font-bold text-center">
          Morachain NFTS’
          </h1>
          <p className="mt-[30px] w-[85%] md:text-[18px] text-center text-gray-400 font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen a book.
          </p>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between flex-wrap px-[70px] mt-[50px] 2xl:px-[290px]">
        <div className="mb-[20px]">
            <img src={dog1} alt="" />
        </div>
        <div className="mb-[20px]">
            <img src={dog2} alt="" />
        </div>
        <div className="mb-[20px]">
            <img src={dog3} alt="" />
        </div>
        <div className="mb-[20px]">
            <img src={dog4} alt="" />
        </div>
        <div className="mb-[20px]">
            <img src={dog1} alt="" />
        </div>
        <div className="mb-[20px]">
            <img src={dog2} alt="" />
        </div>
        <div className="mb-[20px]">
            <img src={dog3} alt="" />
        </div>
        <div className="mb-[20px]">
            <img src={dog4} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-[30px] mb-[100px]">
      <button style={{background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)"}} className='px-[25px] py-[10px] text-[20px] font-bold rounded-[8px]'>PRE SALE ENDED</button>
      </div>
    </>
  );
};

export default Nfts;
