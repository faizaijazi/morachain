import React from 'react'
import robot from "../../assets/robot.png"
const Metaverse = () => {
  return (
    <section class="text-white body-font  bg-black mb-[100px]">
  <div class=" pl-[20px] md:pl-[80px]  mx-auto flex flex-col-reverse md:flex-row flex-wrap">
    <div className='md:w-[50%] flex flex-col justify-center pr-[20px]'>
    <h2 class="sm:text-5xl text-2xl font-medium title-font mb-2 md:w-2/5">Metaverse</h2>
    <br />
    <p className='md:w-[400px] lg:w-[600px] text-[15px] md:text-[20px]'>Morachain is the virtual Metaverse of our platform. Purchasing a property in whole or in portions will make the client eligible to ensure and claim a similar region in the virtual land. The land on our platform must be claimed by buying a listed property at Morachain. It is an independent NFT that purchasers will guarantee with the gamified utility of the platform.</p>
    </div>
    <div class="md:w-[50%] md:pl-6 flex justify-end">
        <img src={robot} alt="" className='h-[150px] sm:h-[300px] md:h-[400px]'/>
    </div>
  </div>
</section>
  )
}

export default Metaverse