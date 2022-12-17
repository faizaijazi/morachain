
import React from "react";
import playBackgronud from "../../assets/playBackgrond.png"
import monkey from "../../assets/monkey.png"
import nftplay from "../../assets/nftplay.png"
import metaverseplay from "../../assets/metaverseplay.png"
function Play() {
    let bgImage = `url(${playBackgronud})`;
    return (
        <>
        <div className="mb-[100px]">
            <div className="flex flex-col items-center px-[20px]">
                <h1 className="text-[30px] md:text-[50px] font-bold text-center">Play 2 Earn <span className=" text-[#e1b646]">(P2E)</span></h1>
                <p className="mt-[30px] w-[80%] md:text-[18px] text-center text-gray-400 font-medium">The virtual land on the Morachain platform once claimed gives the client a choice to assemble, create and populate the land with resources and commercial monetization. The platform is a free NFT that can be sold on NFT markets or brought into the gaming metaverse of any accomplice land exploration games. The game available at the Morachain platform has its own resources that can be bought with the tokens.</p>
            </div>
        </div>
        <div style={{
            background: bgImage,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "600px"
        }} className="mb-[100px] bg-slate-600">
              <div className="bg-slate-300 h-full">
              <div className="flex justify-center flex-col flex-wrap px-[20px]">
                <div className="border-[#e1b646] border-[2px] p-[5px] rounded-[17px] w-[300px]">
                <div style={{
                    background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)",
                }} className="p-[8px] rounded-[17px]">
                    <img src={monkey} alt="" className="h-[180px] w-[100%]" />
                    <h1 className="text-[22px] font-bold pt-[20px] pb-[25px] text-center">NFT</h1>
                </div>
                </div>
                {/* <div className="border-[#e1b646] border-[2px] p-[5px] rounded-[17px] w-[300px]">
                <div style={{
                    background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)",
                }} className="p-[8px] rounded-[17px]">
                    <img src={monkey} alt="" className="h-[180px] w-[100%]" />
                    <h1 className="text-[22px] font-bold pt-[20px] pb-[25px] text-center">NFT</h1>
                </div>
                </div>
                <div className="border-[#e1b646] border-[2px] p-[5px] rounded-[17px] w-[300px]">
                <div style={{
                    background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)",
                }} className="p-[8px] rounded-[17px]">
                    <img src={monkey} alt="" className="h-[180px] w-[100%]" />
                    <h1 className="text-[22px] font-bold pt-[20px] pb-[25px] text-center">NFT</h1>
                </div>
                </div> */}
              </div>
              </div>
        </div>
        </>
    )
}
export default Play