import React from 'react'
import messegeBox1 from "../../assets/messegebox1.png"
import messegeBox2 from "../../assets/messegeBox2.png"
import messegeBox3 from "../../assets/messegebox3.png"
import clock from "../../assets/clock.png"
import clock2 from "../../assets/clock2.png"
import clock3 from "../../assets/clock3.png"
const Roadmap = () => {
  return (
    <>
    <div className='my-[100px] '>
        <div className='px-[20px] md:px-[80px]'>
        <div className='flex md:justify-between'>
            <h1 className='text-[25px] md:text-[50px] font-bold'>Roadmap</h1>
            <h1 className='text-[25px] md:text-[50px] font-bold'>... To Success</h1>
        </div>
        <div className='md:w-[80%] mt-[20px]'>
            <p className='text-[15px] md:text-[20px] text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen a book.</p>
        </div>
        </div>
    </div>
    <div className='mb-[100px] flex justify-center md:justify-between flex-wrap px-[20px] md:px-[80px]'>
        <div className='relative'>
            <img src={messegeBox1} alt="" className='sm:h-[450px] sm:w-[550px] mb-[150px] mr-[20px]'/>
            <div style={{boxShadow: "0px 0px 5px 0px black"}} className='flex flex-col justify-center bg-white border-[2px] border-white text-gray-500 absolute top-[-20px] left-[20px] sm:top-[-40px] sm:left-[15px] h-[220px] sm:h-[250px] w-[65%] sm:w-[80%] rounded-xl'>
                <img src={clock} alt="" className='h-[80px] w-[80px] absolute top-[-40px] left-[50px] sm:top-[-50px] sm:left-[180px]' />
                <ul className='sm:pl-[20px] decoration-white'>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
            </div>
        </div>
        <div className='relative'>
            <img src={messegeBox2} alt="" className='sm:h-[450px] sm:w-[550px] mb-[150px] mr-[20px]'/>
            <div style={{boxShadow: "0px 0px 5px 0px black"}} className='flex flex-col justify-center bg-white border-[2px] border-white text-gray-500 absolute top-[-20px] left-[20px] sm:top-[-40px] sm:left-[15px] h-[220px] sm:h-[250px] w-[65%] sm:w-[80%] rounded-xl'>
                <img src={clock2} alt="" className='h-[80px] w-[80px] absolute top-[-40px] left-[50px] sm:top-[-50px] sm:left-[180px]' />
                <ul className='sm:pl-[20px] decoration-white'>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
            </div>
        </div>
        <div className='relative'>
            <img src={messegeBox3} alt="" className='sm:h-[450px] sm:w-[550px] mb-[150px] mr-[20px]'/>
            <div style={{boxShadow: "0px 0px 5px 0px black"}} className='flex flex-col justify-center bg-white border-[2px] border-white text-gray-500 absolute top-[-20px] left-[20px] sm:top-[-40px] sm:left-[15px] h-[220px] sm:h-[250px] w-[65%] sm:w-[80%] rounded-xl'>
                <img src={clock3} alt="" className='h-[80px] w-[80px] absolute top-[-40px] left-[50px] sm:top-[-50px] sm:left-[180px]' />
                <ul className='sm:pl-[20px] decoration-white'>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
            </div>
        </div>
        <div className='relative'>
            <img src={messegeBox1} alt="" className='sm:h-[450px] sm:w-[550px] mb-[150px] mr-[20px]'/>
            <div style={{boxShadow: "0px 0px 5px 0px black"}} className='flex flex-col justify-center bg-white border-[2px] border-white text-gray-500 absolute top-[-20px] left-[20px] sm:top-[-40px] sm:left-[15px] h-[220px] sm:h-[250px] w-[65%] sm:w-[80%] rounded-xl'>
                <img src={clock} alt="" className='h-[80px] w-[80px] absolute top-[-40px] left-[50px] sm:top-[-50px] sm:left-[180px]' />
                <ul className='sm:pl-[20px] decoration-white'>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Roadmap