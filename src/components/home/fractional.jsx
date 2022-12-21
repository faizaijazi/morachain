import React from 'react'
import house from "../../assets/house.png"
import "../css/calculator.css"
const Fractional = () => {
  return (
    <section className=" body-font">
    <div className=" px-[20px] py-16 mx-auto flex flex-wrap bg-[#0a0d10] xl:pr-[200px]">
      <div className='md:w-2/4 flex items-end md:relative'>
          <img src={house} alt="" className='house md:absolute md:top-[230px] md:left-[-70px]  xl:h-[400px] 2xl:h-[500px] lg:top-[130px] xl:top-[70px] 2xl:left-[-90px] 2xl:top-[-50px]' />
      </div>
      <div className="md:w-2/4 md:pr-[30px]">
        <div className="md:mt-4 mt-6 lg:pl-[20px] bg">
          <h1 className='fractional text-3xl lg:text-[35px] 2xl:text-[55px] 2xl:leading-snug font-bold text-white'>What is Fractional Ownership</h1>
          <br />
          <p className='text-white text-[15px] md:text-[13px] lg:text-[15px] xl-text-[20px] md:font-medium'>Morachain has a platform that tokenizes property resources in the real worth of real estate metrics that is Sq. ft. A minimum share in the property is 1 sq. ft. that can be bought. With properties going from reasonable housing to ultra-luxury - the tokenization platform, Morachain, was launched in the year XYZ exclusively.</p>
          <p className='pt-[7px] text-white text-[15px] md:text-[13px] lg:text-[15px] xl-text-[20px] md:font-medium'>After realizing that through blockchain technology, it is possible that more individuals can access the real estate market we introduced our platform. We observed that the exchanges and transactions can be made more straightforward, safe, and equitable. Real estate transactions may ultimately turn out to be really a peer-to-peer practice with blockchain-powered platforms doing the most of the work.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Fractional