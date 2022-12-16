import React from 'react'
import listing1 from "../../assets/listing-1.png"
import listing2 from "../../assets/listing-2.png"
import listing3 from "../../assets/listing-3.png"
import listing4 from "../../assets/listing-4.png"
const Tokenmora = () => {
  return (
    <div className='px-8 md:px-[20px] lg:px-20  pb-[20px] md:pb-[0px] mx-auto  mb-[100px]'>
        <div className='flex justify-center'>
        <h1 className='text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] w-[300px] sm:w-[400px] lg:w-[500px] font-bold leading-[1.2] text-center'><span className='text-[#e1b646] font-bold' style={{color: "linear-gradient(90deg,#e1b646,#925a06,#e1b646)"}}>Morachain</span> Token is now listed on:</h1>
        </div>
        <div className='flex justify-center mt-[50px]'>
        <div className='flex justify-center sm:justify-between w-[800px] flex-wrap'>
            <div className='border rounded-[10px] flex justify-center px-[35px] py-[15px] mb-[20px] mr-[20px]' style={{boxShadow: "6px 6px 8px grey"}}>
                <img src={listing1} alt="" />
            </div>
            <div className='border rounded-[10px] flex justify-center px-[35px] py-[15px] mb-[20px] mr-[20px]' style={{boxShadow: "6px 6px 8px grey"}}>
                <img src={listing2} alt="" />
            </div>
            <div className='border rounded-[10px] flex justify-center px-[35px] py-[15px] mb-[20px] mr-[20px]' style={{boxShadow: "6px 6px 8px grey"}}>
                <img src={listing3} alt="" />
            </div> 
            <div className='border rounded-[10px] flex justify-center px-[35px] py-[15px] mb-[20px] mr-[20px]' style={{boxShadow: "6px 6px 8px grey"}}>
                <img src={listing4} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Tokenmora