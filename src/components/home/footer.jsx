import React from 'react'
import phone from "../../assets/phone.png"
import email from "../../assets/email.png"
const Footer = () => {
  return (
    <>
    <div className='bg-black text-white flex justify-around flex-wrap py-24 px-[20px] 2xl:px-[200px]'>
        <div className='text-center h-[120px] flex flex-col justify-between items-center mr-[10px] mb-[40px]'>
            <img src={phone} alt="" className='h-[50px] w-[50px]'/>
            <h1 className='text-[25px] font-bold'>CONTACT NUMBER</h1>
            <p>012-345-6789-0000</p>
        </div>
        <div className='text-center h-[120px] flex flex-col justify-between items-center mr-[10px] mb-[40px]'>
            <img src={email} alt="" className='h-[50px] w-[50px]'/>
            <h1 className='text-[25px] font-bold'>EMAIL ADDRESS</h1>
            <p>info@company.com</p>
        </div>
        <div className='text-center h-[120px] flex flex-col justify-between items-center w-[200px] mr-[10px] mb-[40px]'>
            <img src={phone} alt="" className='h-[50px] w-[50px]'/>
            <h1 className='text-[25px] font-bold'>OUR ADDRESS</h1>
            <p className='text-[15px]'>213 Street Lorem Ipsum state United state of America</p>
        </div>
    </div>
    <div style={{
        background: "linear-gradient(90deg,#e1b646,#925a06,#e1b646)"
    }} className="flex justify-center py-[10px]">
        <p className='text-[12px] sm:text-[16px]'>Morachain © copyrights.2022 All Right Reserved</p>
    </div>
    </>
  )
}

export default Footer