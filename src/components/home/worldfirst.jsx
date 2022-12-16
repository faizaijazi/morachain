import React from "react";
import background from "../../assets/background.png";
import lady from "../../assets/lady.png";
const Worldfirst = () => {
  let bgImage = `url(${background})`;
  return (
    <div className="mb-[100px]">
      <div style={{
        background: bgImage,
        background: "linear-gradient(to right, #000000 -2%, 77%)",
        backgroundSize: "cover",
      }} className=" text-white">
          <div className="flex items-center pl-[80px]">
            <div  
            style={{
                
            }}
            className="w-[60%] h-[90vh] flex flex-col justify-center">
              <h1>
                World’s First Decentralized Real Estate NFT Marketplace with
                Metaverse
              </h1>
              <p>
                Morachain is the trailblazer in Fractionalizing the NFT of real
                estate assets. We have likewise changed this by making a
                computerized resource of this real-world property asset. We at
                Morachain have zeroed in on giving a consistent experience with
                transactions in a digital format by canceling out all middlemen
                through this platform.
              </p>
              <p>
                We let sellers tokenize resources, basically dealing with it
                like a stock sale, and liquidating that resource through a token
                deal utilizing the platform. The gathered tokens can be traded
                for fiat money, with purchasers possessing a percentage stake of
                the property.
              </p>
            </div>
            <div style={{
                background: bgImage,
                backgroundSize: "cover",
            }} className="w-[40%] flex justify-end">
              <img src={lady} alt="" className="h-[90vh]" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Worldfirst;
