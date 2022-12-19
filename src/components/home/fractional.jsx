import React from 'react'
import house from "../../assets/house.png"
const Fractional = () => {
  return (
    // px-8 md:px-[20px] lg:px-5
    <section className=" body-font">
    <div className=" px-[20px] py-16 mx-auto flex flex-wrap bg-[#0a0d10]">
      <div className='md:w-2/4 flex items-end md:relative'>
          <img src={house} alt="" className='md:absolute md:top-[130px] md:left-[-70px]' />
      </div>
      <div className="md:w-2/4 md:pr-[30px]">
        <div className="md:mt-4 mt-6 lg:pl-[20px] bg">
          <h1 className='text-3xl lg:text-[35px]  font-bold text-white'>What is Fractional Ownership</h1>
          <br />
          <p className='text-gray-400 text-[15px] md:text-[15px] lg:text-[20px] md:font-medium'>Morachain has a platform that tokenizes property resources in the real worth of real estate metrics that is Sq. ft. A minimum share in the property is 1 sq. ft. that can be bought. With properties going from reasonable housing to ultra-luxury - the tokenization platform, Morachain, was launched in the year XYZ exclusively.</p>
          <p className='pt-[7px] text-gray-400 text-[15px] md:text-[15px] lg:text-[20px] md:font-medium'>After realizing that through blockchain technology, it is possible that more individuals can access the real estate market we introduced our platform. We observed that the exchanges and transactions can be made more straightforward, safe, and equitable. Real estate transactions may ultimately turn out to be really a peer-to-peer practice with blockchain-powered platforms doing the most of the work.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Fractional