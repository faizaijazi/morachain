import React from "react";
import background from "../../assets/background.png";
import lady from "../../assets/lady.png";
const Worldfirst = () => {
  let bgImage = `url(${background})`;
  return (
    <div style={{
      background: bgImage,
      backgroundSize: "cover"
    }} className="flex items-center flex-col-reverse md:flex-row py-[30px] md:py-[20px] px-[20px] md:pl-[80px]">
      <div className="w-full md:w-[60%] flex flex-col justify-center text-white">
        <h1 className="text-[25px] md:text-[40px] font-bold">World’s First Decentralized Real Estate NFT Marketplace with Metaverse</h1>
        <p className="md:text-[18px] pt-[10px]">Morachain is the trailblazer in Fractionalizing the NFT of real estate assets. We have likewise changed this by making a computerized resource of this real-world property asset. We at Morachain have zeroed in on giving a consistent experience with transactions in a digital format by canceling out all middlemen through this platform.</p>
        <p className="text-[15px] md:text-[18px] pt-[10px]">Morachain is the trailblazer in Fractionalizing the NFT of real estate assets. We have likewise changed this by making a computerized resource of this real-world property asset. We at Morachain have zeroed in on giving a consistent experience with transactions in a  through this platform.</p>
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-[40%]">
        <img src={lady} alt="" className="h-[400px] md:h-[600px]" />
      </div>
    </div>
  );
};

export default Worldfirst;
