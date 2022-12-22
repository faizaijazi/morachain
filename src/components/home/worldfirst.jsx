import React from "react";
import background from "../../assets/background.png";
import lady from "../../assets/lady.png";
import "../css/worldfirst.css"
const Worldfirst = () => {
  let bgImage = `url(${background})`;
  return (
    <div style={{
      background: bgImage,
      backgroundSize: "cover"
    }} className="lady relative mt-[200px] lg:mt-[0px] flex justify-center pb-[50px]   lg:h-[620px]">
      <div className="bgs z-0"></div>
      <div className="flex z-50 items-center flex-col-reverse lg:flex-row  justify-between w-[90%] md:w-[70%] ">
      <div className=" flex flex-col justify-center text-white xl:w-[100%]">
        <h1 className="text-[25px] md:text-[40px] font-bold">World’s First Decentralized Real Estate NFT Marketplace with Metaverse</h1>
        <p className="md:text-[18px] pt-[10px]">Morachain is the trailblazer in Fractionalizing the NFT of real estate assets. We have likewise changed this by making a computerized resource of this real-world property asset. We at Morachain have zeroed in on giving a consistent experience with transactions in a digital format by canceling out all middlemen through this platform.</p>
        <p className="text-[15px] md:text-[18px] pt-[10px]">Morachain is the trailblazer in Fractionalizing the NFT of real estate assets. We have likewise changed this by making a computerized resource of this real-world property asset. We at Morachain have zeroed in on giving a consistent experience with transactions in a  through this platform.</p>
      </div>
      <div className="w-full lg:w-[50%] flex justify-center lg:justify-end ">
        <img src={lady} alt="" className="h-[300px] mt-[-50px] lg:mt-[0px] lg:h-[700px]" />
      </div>
      </div>
    </div> 
  );
};

export default Worldfirst;


 