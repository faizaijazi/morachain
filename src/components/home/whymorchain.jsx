import React from 'react'
import accesibility from "../../assets/accessiblity.png"
import accesibilityvector from "../../assets/accesibiltyvector.png"
import freedom from "../../assets/freedom.png"
import freedomvector from "../../assets/freedomvector.png"
import creativity from "../../assets/creativity.png"
import creativityvector from "../../assets/creativityvector.png"
import diversity from "../../assets/diversity.png"
import diversityvector from "../../assets/diversityvector.png"
const Whymorchain = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 pt-16 pb-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-5xl text-3xl font-bold title-font mb-4 text-gray-900">Why <span className='text-[#e1b646] font-bold'>Morachain</span></h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed  font-medium text-gray-400 text-[15px] sm:text-[18px]">Morachain offers a unique way for opening and unlocking NFT liquidity and gives local community admittance to possessing portions of notable and valuable Real Estate NFTs.</p>
    </div>
    <div className="flex flex-wrap justify-center p-[20px] -m-3">
      <div className='relative sm:w-[250px] xl:w-[300px] flex flex-col items-center rounded-[20px] border mb-[20px] sm:mr-[20px] p-[5px] hover:top-[15px] cursor-pointer shadow-lg'>
      <div className='absolute bottom-0 right-0'>
            <img src={accesibilityvector} alt="" />
      </div>
      <div className='my-[20px]'>
        <img src={accesibility} alt="" />
      </div>
      <div className='mb-[40px]'>
        <h1 className='text-center mb-[10px] font-extrabold text-[25px]'>ACCESSIBILITY</h1>
        <p className='text-center font-semibold md:font-semibold  md:text-[15px] text-[#aba8a0]'>Get admittance to the best real estate deals that were simply accessible to institutional investors. Invest in land in fractions and gain profits with capital appreciation.</p>
      </div> 
      </div>
      <div className='relative sm:w-[250px] xl:w-[300px] flex flex-col items-center rounded-[20px] border mb-[20px] sm:mr-[20px] p-[5px] hover:top-[15px] cursor-pointer shadow-lg'>
      <div className='absolute bottom-0 right-0'>
            <img src={freedomvector} alt="" />
      </div>
      <div className='my-[20px]'>
        <img src={freedom} alt="" />
      </div>
      <div className='mb-[40px]'>
        <h1 className='text-center mb-[10px] font-extrabold text-[25px]'>FREEDOM</h1>
        <p className='text-center font-semibold md:font-semibold  md:text-[15px] text-[#aba8a0]'>No lock-in period on investments and no barrier to selective deals delivered on the tokenization stage.</p>
      </div> 
      </div>
      <div className='relative sm:w-[250px] xl:w-[300px]  flex flex-col items-center rounded-[20px] border mb-[20px] sm:mr-[20px] p-[5px] hover:top-[15px] cursor-pointer shadow-lg'>
      <div className='absolute bottom-0 right-0'>
            <img src={diversityvector} alt="" />
      </div>
      <div className='my-[20px]'>
        <img src={diversity} alt="" />
      </div>
      <div className='mb-[40px]'>
        <h1 className='text-center mb-[10px] font-extrabold text-[25px]'>DIVERSITY</h1>
        <p className='text-center font-semibold md:font-semibold  md:text-[15px] text-[#aba8a0]'>Get admittance to the best real estate deals that were simply accessible to institutional investors. Invest in land in fractions and gain profits with capital appreciation.</p>
      </div> 
      </div>
      <div className='relative z-[99] sm:w-[250px] xl:w-[300px] flex flex-col items-center rounded-[20px] border mb-[20px] sm:mr-[20px] p-[5px] hover:top-[15px] cursor-pointer shadow-lg'>
      <div className='absolute bottom-1 right-2'>
            <img src={creativityvector} alt=""/>
      </div>
      <div className='my-[20px]'>
        <img src={creativity} alt="" />
      </div>
      <div className='mb-[40px] z-[999]'>
        <h1 className='text-center mb-[10px] font-extrabold text-[25px]'>CREATIVITY</h1>
         <p className='text-center font-semibold md:font-semibold  md:text-[15px] text-[#aba8a0]'>Get admittance to the best real estate deals that were simply accessible to institutional investors. Invest in land in fractions and gain profits with capital appreciation.</p>
      </div> 
      </div>
    </div>
  </div>
</section>
  )
}

export default Whymorchain
