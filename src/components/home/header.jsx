import React, { useRef } from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/style.css"
const Header = ({condition}) => {
  const navBar = useRef();
  function navOpen() {
    navBar.current.style.display = "block";
  }
  function navClose() {
    navBar.current.style.display = "none";
  }

  return (
    <header className="w-[100%]">
      <nav className="bg-white py-[30px] flex items-center justify-between 2xl:justify-start 2xl:px-[300px] px-[50px] z-[99]">
        <div className=" w-full md:w-[200px] flex justify-between items-center">
          <img src={logo} alt="" className="h-[48px] md:h-[72px]" />
          <FontAwesomeIcon
            icon={faBars}
            className="md:hidden text-[1.5rem] font-bold cursor-pointer"
            onClick={() => navOpen()}
          />
        </div>
        <div className="hidden md:flex w-[80%] justify-around ml-[20px]">
          <div className=" w-[700px]">
            <ul className="flex justify-between md:w-[350px] lg:w-[500px] text-[15px] lg:text-[20px] font-semibold lg:pl-[30px]">
              <li>
                <Link to={"/"} >Home</Link>
              </li>
              <li>
                <Link to={"/Discover"}>Discover</Link>
              </li>
              <li>
                <Link>Staking</Link>
              </li>
              <li>
                <Link>NFTs</Link>
              </li>
              {
                condition &&  <li>
                <Link>NTS's Presale</Link>
              </li>
              }
            </ul>
          </div>
          <div className="text-[15px] lg:text-[20px] flex justify-center font-semibold pl-[10px] md:w-[180px] lg:w-[250px]">
            <div className="flex justify-between w-[230px]">
            <Link to={"/Login"}>Login</Link>
              <Link to={"/Signup"} className="border-l-[2px] pl-[15px]">
                Signup
              </Link>
              <a href=".">connect</a>
            </div>
          </div>
        </div>
      </nav>
      <div
        ref={navBar}
        className="hidden fixed duration-1000 ease-in-out h-[100vh] bg-white w-[300px]  z-[999] top-0"
      >
        <div className="flex justify-end pt-[20px] pr-[20px]">
          <FontAwesomeIcon
            icon={faX}
            className="text-[1.5rem] font-bold cursor-pointer"
            onClick={() => navClose()}
          />
        </div>
        <div className="mt-[50px]">
          <ul className="h-[300px] flex flex-col items-center justify-around font-bold">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Discover"}>Discover</Link>
            </li>
            <li>
              <Link href=".">Staking</Link>
            </li>
            <li>
              <Link href=".">NFTs</Link>
            </li>
            {
                condition &&  <li>
                <Link>NTS's Presale</Link>
              </li>
              }
          </ul>
        </div>
        <div className="h-[150px] flex flex-col items-center justify-around font-bold">
          <div className="flex justify-between w-[200px]">
            <Link to={"/Login"} className="border px-[15px] py-[10px] bg-[#e1b646] text-white rounded-[10px]">login</Link>
            <Link to={"/Signup"} className="border px-[15px] py-[10px] bg-[#e1b646] text-white rounded-[10px]">Signup</Link>
          </div>
          <Link href="." style={{
            background: "linear-gradient(90deg,#e1b646,#925a06,#e1b646)"
          }} className="border px-[15px] py-[10px] bg-[#e1b646] text-white rounded-[10px]">connect</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
