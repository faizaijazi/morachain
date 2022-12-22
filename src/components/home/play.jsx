
import React from "react";
import playBackgronud from "../../assets/playBackgrond.png"
import monkey from "../../assets/monkey.png"
import nftplay from "../../assets/nftplay.png"
import metaverseplay from "../../assets/metaverseplay.png"
function Play() {
    let bgImage = `url(${playBackgronud})`;
    return (
        <>
        <div className="mb-[20px] flex justify-center">
            <div className="flex flex-col items-center px-[20px]  xl:w-[75%]">
                <h1 className="text-[35px] md:text-[50px] font-bold text-center">Play 2 Earn <span className=" text-[#e1b646]">(P2E)</span></h1>
                <p className="mt-[30px] sm:w-[80%] text-[15px] md:text-[18px] text-center text-gray-400 font-medium">The virtual land on the Morachain platform once claimed gives the client a choice to assemble, create and populate the land with resources and commercial monetization. The platform is a free NFT that can be sold on NFT markets or brought into the gaming metaverse of any accomplice land exploration games. The game available at the Morachain platform has its own resources that can be bought with the tokens.</p>
            </div>
        </div>
        <div style={{
            background: bgImage,
            backgroundSize: "cover"
        }} className="mb-[100px] bg-slate-600 pt-[130px] md:pt-[0px] md:h-[600px] 2xl:h-[800px] xl:flex xl:justify-center">
              <div className="h-full flex justify-center xl:items-center  md:justify-end  xl:w-[75%]">
              <div className="flex justify-center md:flex-col flex-wrap px-[20px] md:h-[600px] 2xl:h-[800px] w-[700px] md:pt-[100px]">
                <div className="border-[#e1b646] border-[2px] p-[5px] rounded-[17px] w-[300px] sm:w-[400px] md:w-[200px] lg:w-[300px] mb-[20px] xl:mr-[20px]">
                <div style={{
                    background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)",
                }} className="p-[8px] 2xl:p-[20px] xl:px-[15px] rounded-[17px] ">
                    <img src={monkey} alt="" className="h-[200px] md:h-[130px] 2xl:h-auto w-[100%]" />
                    <h1 className="text-[22px] font-bold pt-[20px] pb-[25px] md:pt-[10px] md:pb-[10px] text-center">NFT</h1>
                </div>
                </div>
                <div className="border-[#e1b646] border-[2px] p-[5px] rounded-[17px] w-[300px] sm:w-[400px] md:w-[200px] lg:w-[300px] mb-[20px] xl:mr-[20px]">
                <div style={{
                    background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)",
                }} className="p-[8px]  2xl:p-[20px] xl:px-[15px] rounded-[17px]">
                    <img src={metaverseplay} alt="" className="h-[200px] md:h-[130px] 2xl:h-auto w-[100%]" />
                    <h1 className="text-[22px] font-bold pt-[20px] pb-[25px] md:pt-[10px] md:pb-[10px] text-center">METAVERSE</h1>
                </div>
                </div>
                <div className="border-[#e1b646] border-[2px] p-[5px] rounded-[17px] w-[300px] sm:w-[400px] md:w-[200px] lg:w-[300px] mb-[20px] xl:mr-[20px]">
                <div style={{
                    background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)",
                }} className="p-[8px] 2xl:p-[20px] xl:px-[15px] rounded-[17px]">
                    <img src={nftplay} alt="" className="h-[200px] md:h-[130px] 2xl:h-auto w-[100%]" />
                    <h1 className="text-[22px] sm:text-[17px] lg:text-[22px] font-bold pt-[20px] pb-[25px] md:pt-[10px] md:pb-[10px] text-center">FRACTIONALIZATION</h1>
                </div>
                </div>
              </div>
              </div>
        </div>
        </>
    )
}
export default Play