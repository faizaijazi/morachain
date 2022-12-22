import React from 'react'
import dog from "../../assets/dog.png"
import saleBackground from "../../assets/saleBackground.png"
const Sale = () => {
  let bgImage = `url(${saleBackground})`;
  return (
    <section className=" body-font">
  <div className="container h-auto  md:h-[100vh] px-8 md:px-[20px] lg:px-10 2xl:px-[100px] pt-24 pb-[20px] md:pb-[50px] mx-auto flex flex-wrap md:flex-nowrap items-center">
  <div className="lg:w-[40%] 2xl:w-[50%] md:w-1/2 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <img src={dog} alt=""  />
    </div>
    <div className="w-full lg:w-3/5 mt-[20px] md:mt-[0px] md:w-1/2 flex justify-center items-center md:items-start flex-col md:pr-[2rem] lg:pr-[4rem] pr-0 md:pl-[20px]">
      <h1 className="title-font font-bold text-[1.5rem] lg:text-[2.6rem] text-gray-900">$Mor NFT Pre Sale Pricing</h1>
      <p className='mt-[20px] text-[20px] font-bold text-white'>$100000,10 USD Raised</p>
      <h1 className="mt-[20px] title-font font-bold text-[1.5rem] lg:text-[2.6rem] text-gray-900">$Mor NFT Listing date</h1>
      <p className='mt-[20px] text-[20px] font-bold text-white'>Wil Be Announced Soon</p>
        <div className='flex flex-wrap justify-center md:justify-between lg:w-[440px] mt-[20px]'>
        <button style={{background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)"}} className='mb-[10px] md:mb-[0px] mr-[10px] text-[20px] font-semibold border-[2px] border-white rounded-[5px] px-[17px] py-[10px]'>MOR ADDRESS</button>
        <button style={{background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)"}} className='mb-[10px] md:mb-[0px] mr-[10px] text-[20px] font-semibold border-[2px] border-white rounded-[5px] px-[17px] py-[10px]'>MOR NFT ADDRESS</button>
      </div>
    </div>
    
  </div>
</section>
  )
}

export default Sale