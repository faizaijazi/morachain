import React from "react";
import Header from "../components/home/header";
import Footer from "../components/home/footer";
import phone from "../assets/phone.png";
import textMessege from "../assets/textMessege.png"
// import lock from '../assets/lock.png'
import saleBackground from "../assets/saleBackground.png";
import signup from "../assets/login.png";
import signupPhone from "../assets/signupPhone.png"
import location from "../assets/location.png"
import lock from "../assets/lock.png";
const Signup = () => {
  let bgImage = `url(${saleBackground})`;
  return (
    <div>
      <div
        style={{
          paddingTop: "10px",
          background: "linear-gradient(90deg,#e1b646,#925a06,#e1b646)",
        }}
        className="bg-slate-800"
      >
        <div
          style={{
            backgroundImage: bgImage,
          }}
        >
          <div>
            <Header condition={false}/>
            <div className="h-[45vh] flex justify-center items-center">
              <h1 className="text-[65px] font-semibold">SignUp</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[100px] flex justify-center flex-col lg:flex-row items-center px-[20px]">
        <div className="w-full  lg:w-[50%] flex justify-center">
          <img src={signup} alt="" className="w-[70%]" />
        </div>
        <div className="w-full lg:w-[50%] mt-[50px] lg:mt-[0px] flex flex-col  justify-center lg:justify-start px-[0px] lg:pr-[50px] xl:pr-[100px] 2xl:pr-[180px]">
          <form
            action=""
            className="grid grid-cols-2 gap-x-5 lg:gap-x-8 text-[15x] sm:text-[18px]"
          >
            <div className="">
              <label htmlFor="">First Name*</label>
              <div className="mt-[10px] flex items-center w-full  h-[40px] py-[25px] px-[10px] border-[1.5px] border-[#f5a218] rounded-xl">
                <div className="mr-[5px] bg-[#f5a218] p-[10px] rounded-lg ">
                  <img src={phone} alt="" />
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-[40px] w-full border-none outline-none"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="">Last Name*</label>
              <div className="mt-[10px] flex items-center w-full h-[40px] py-[25px] px-[10px] border-[1.5px] border-[#f5a218] rounded-xl">
                <div className="mr-[5px] bg-[#f5a218] p-[10px] rounded-lg ">
                  <img src={phone} alt="" />
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-[40px] w-full border-none outline-none"
                />
              </div>
            </div>
            <div className="mt-[20px]">
              <label htmlFor="">Email Address*</label>
              <div className="mt-[10px] flex items-center w-full  h-[40px] py-[25px] px-[10px] border-[1.5px] border-[#f5a218] rounded-xl">
                <div className="mr-[5px] bg-[#f5a218] p-[10px] rounded-lg ">
                  <img src={textMessege} alt="" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-[40px] w-full border-none outline-none"
                />
              </div>
            </div>
            <div className="mt-[20px]">
              <label htmlFor="">Phone Number*</label>
              <div className="mt-[10px] flex items-center w-full h-[40px] py-[25px] px-[10px] border-[1.5px] border-[#f5a218] rounded-xl">
                <div className="mr-[5px] bg-[#f5a218] p-[10px] rounded-lg ">
                  <img src={signupPhone} alt="" />
                </div>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="h-[40px] w-full border-none outline-none"
                />
              </div>
            </div>
            <div className="mt-[20px]">
              <label htmlFor="">Address 1*</label>
              <div className="mt-[10px] flex items-center w-full  h-[40px] py-[25px] px-[10px] border-[1.5px] border-[#f5a218] rounded-xl">
                <div className="mr-[5px] bg-[#f5a218] p-[10px] rounded-lg ">
                  <img src={location} alt="" />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="h-[40px] w-full border-none outline-none"
                />
              </div>
            </div>
            <div className="mt-[20px]">
              <label htmlFor="">Address 2*</label>
              <div className="mt-[10px] flex items-center w-full h-[40px] py-[25px] px-[10px] border-[1.5px] border-[#f5a218] rounded-xl">
                <div className="mr-[5px] bg-[#f5a218] p-[10px] rounded-lg ">
                  <img src={location} alt="" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="h-[40px] w-full border-none outline-none"
                />
              </div>
            </div>
            <div className="mt-[20px]">
              <label htmlFor="">Password*</label>
              <div className="mt-[10px] flex items-center w-full h-[40px] py-[25px] px-[10px] border-[1.5px] border-[#f5a218] rounded-xl">
                <div className="mr-[5px] bg-[#f5a218] p-[10px] rounded-lg ">
                  <img src={lock} alt="" />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="h-[40px] w-full border-none outline-none"
                />
              </div>
            </div>
            <div className="mt-[20px]">
              <label htmlFor="">Confirm Password*</label>
              <div className="mt-[10px] flex items-center w-full h-[40px] py-[25px] px-[10px] border-[1.5px] border-[#f5a218] rounded-xl">
                <div className="mr-[5px] bg-[#f5a218] p-[10px] rounded-lg ">
                  <img src={lock} alt="" />
                </div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="h-[40px] w-full border-none outline-none"
                />
              </div>
            </div>
          </form>
          <div className="mt-[30px] w-[full] bg-slate-50">
            <button className="bg-[#f4a319] font-bold text-[20px] w-full h-[50px] rounded-xl">
              Sign-In Now
            </button>
          </div>
          <div className="text-[14px] sm:text-[16px] mt-[20px] flex justify-center">
            <span>Already Have An Account? Signin Now</span>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
