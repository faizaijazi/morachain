import React from 'react'
import coin from "../../assets/coin-lg.png"
import "../css/style.css"
const Utility = () => {
  return (
    <div>
      <div className="mb-[20px] mt-[50px] md:mt-[80px]">
        <div className="flex flex-col items-center md:px-[20px]">
          <h1 className="text-[35px] md:text-[50px] font-bold text-center">
            <span className=" text-[#e1b646]">Morchain</span> Token Utility
          </h1>
          <p className="mt-[20px] w-[80%] md:text-[18px] text-center text-gray-400 font-medium 2xl:w-[50%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <section className="body-font">
        <div className=" pb-24 mx-auto flex flex-wrap px-[20px] 2xl:px-[90px]">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex justify-center items-center">
            <img
              alt="feature"
              className="object-cover object-center  w-[300px] md:h-[400px] md:w-[400px] 2xl:ml-[120px]"
              src={coin}
            />
          </div>
          <div className="flex items-center justify-center lg:justify-start w-full lg:w-1/2 lg:pl-[50px] ">
                <ul className='list h-full flex flex-col justify-center text-[12px] sm:text-[20px] font-bold text-black'>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Utility
