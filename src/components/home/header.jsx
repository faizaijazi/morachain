import React from 'react'
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
   <header className='w-[100%]'>
        <nav className='bg-white py-[30px] flex items-center justify-between  px-[50px]'>
            <div className=' w-full md:w-[200px] flex justify-between items-center'>
                <img src={logo}  alt="" className='h-[48px] md:h-[72px]' />
                <FontAwesomeIcon icon={faBars} className="md:hidden text-[1.5rem] font-bold" />
            </div>
           <div className='hidden md:flex w-[80%] justify-around ml-[20px]'>
           <div className=' w-[70%]'>
                <ul className='flex justify-between md:w-[350px] lg:w-[500px] text-[15px] lg:text-[20px] font-semibold lg:pl-[30px]'>
                    <li><a href=".">Home</a></li>
                    <li><a href=".">Discover</a></li>
                    <li><a href=".">Staking</a></li>
                    <li><a href=".">NFTs</a></li>
                    <li><a href=".">NTS's Presale</a></li>
                </ul>
            </div>   
            <div className='text-[15px] lg:text-[20px] flex justify-center font-semibold pl-[10px] md:w-[180px] lg:w-[250px]'>
                <div className='flex justify-between w-[230px]'>
                <a href=".">login</a>
                <a href="." className='border-l-[2px] pl-[15px]'>Signup</a>
                <a href=".">connect</a>
                </div>
            </div>
            </div>         
        </nav>
   </header>
  )
}

export default Header