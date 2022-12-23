import React from 'react'
import logo2 from "../../assets/logo2.png"
import copy from "../../assets/copy.png"
import "../css/style.css"
const Calculator = () => {
  return (
    <div className=' px-10 md:px-[20px] lg:px-[70px]  mb-[100px] mt-[-130px] md:mt-[-150px] lg:mt-[-130px] xl:mt-[-110px] 2xl:mt-[-160px] relative z-50 flex justify-center'>
        <div className='bg-white py-[60px] px-[10px] sm:px-[50px] sm:py-[70px] rounded-[50px] shadow-xl w-[1200px]'>
            <div className='flex flex-col sm:flex-row justify-between text-center md:text-start items-center flex-wrap text-[18px]  2xl:font-bold font-semibold'>
                <div className='w-[150px]  flex justify-center pb-[15px]'>
                    <img src={logo2} alt="" />
                </div>
                <div className='  pb-[15px]'>
                    <p>Morachain</p>
                    <span>123.000</span>
                </div>
                <div className=' pb-[15px]'>
                    <p>Total token supply:</p>
                    <span>99,805,267.06</span>
                </div>
                <div className='pb-[15px]'>
                    <p>Circulating Supply:</p>
                    <span>2,332,159.15</span>
                </div>
                <div className=' pb-[15px]'>
                    <p>Fully diluted Market Cap:</p>
                    <span>$3,728,376.74</span>
                </div>
                <div className='w-[150px] pb-[15px]'>
                    <p>Market Cap:</p>
                    <span>$87,121.33</span>
                </div>
            </div>
            <div className='flex justify-between items-center flex-col sm:flex-row flex-wrap mt-[40px]'>
                <div className='flex p-[5px] border-[2px] border-[#e1b646] rounded-[10px] items-center justify-between sm:w-[100%] md:w-[300px] mb-[10px]'>
                    <div style={{
                        background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)"
                    }} 
                    className='w-[80px] text-center font-semibold border-[2px] border-[#e1b646] rounded-l-[10px]'>
                        <span>Mor Address</span>
                    </div>
                    <input type="text" className='w-[50%] sm:w-[70%] border-none outline-none pl-[10px]'/>
                    <div>
                        <img src={copy} alt="" />
                    </div>
                </div>
                <div className='flex p-[5px] border-[2px] border-[#e1b646] rounded-[10px] items-center justify-between sm:w-[100%] md:w-[300px] mb-[10px]'>
                    <div style={{
                        background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)"
                    }} 
                    className='w-[80px] text-center font-semibold border-[2px] border-[#e1b646] rounded-l-[10px]'>
                        <span>Mor Address</span>
                    </div>
                    <input type="text" className='w-[50%] sm:w-[70%] border-none outline-none pl-[10px]'/>
                    <div>
                        <img src={copy} alt="" />
                    </div>
                </div>
                <div className='flex p-[5px] border-[2px] border-[#e1b646] rounded-[10px] items-center justify-between sm:w-[100%] md:w-[300px] mb-[10px]'>
                    <div style={{
                        background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)"
                    }} 
                    className='w-[80px] text-center font-semibold border-[2px] border-[#e1b646] rounded-l-[10px]'>
                        <span>Mor Address</span>
                    </div>
                    <input type="text" className='w-[50%] sm:w-[70%] border-none outline-none pl-[10px]'/>
                    <div>
                        <img src={copy} alt="" />
                    </div>
                </div>
                <div>
                    <button style={{
                         background: "linear-gradient(90deg,#e1b646,#ff9801,#e1b646)"
                    }}
                    className="text-[18px] px-[30px] cursor-pointer border-none py-[15px] rounded-[10px] font-bold"
                    >Buy Morhain</button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Calculator