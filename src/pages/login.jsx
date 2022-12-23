import React from "react";
import Header from "../components/home/header";
import saleBackground from "../assets/saleBackground.png";
import login from "../assets/login.png";
import phone from "../assets/phone.png";
import lock from "../assets/lock.png";
import Footer from "../components/home/footer";
const Login = () => {
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
            <Header />
            <div className="h-[45vh] flex justify-center items-center">
              <h1 className="text-[65px] font-semibold">LOGIN</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[100px] flex justify-center">
        <div className="flex flex-wrap flex-col lg:flex-row lg:justify-between w-[100%] 2xl:w-[80%] px-[20px] lg:px-[0px]">
          <div className="w-full lg:w-[50%] flex justify-center">
            <img src={login} alt="" />
          </div>
          <div className="w-full  lg:w-[50%] mt-[50px] lg:mt-[0px] flex justify-center lg:justify-start items-center lg:pl-[20px] 2xl:pr-[80px] lg:pr-[100px]">
            <form className="flex flex-col w-[80%] md:w-[80%] lg:w-[100%]">
              <div>
                <label
                  htmlFor=""
                  className="pl-[5px] text-[18px] font-semibold"
                >
                  Email Address*
                </label>
                <div className="mt-[10px] flex items-center w-[100%] h-[40px] py-[25px] px-[10px] border-[1.5px] border-[#f5a218] rounded-xl">
                  <div className="mr-[5px] bg-[#f5a218] p-[10px] rounded-lg ">
                    <img src={phone} alt="" className="" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="h-[40px] w-[100%] border-none outline-none"
                  />
                </div>
              </div>
              <div className="mt-[20px]">
                <label
                  htmlFor=""
                  className="pl-[5px] text-[18px] font-semibold"
                >
                  Password*
                </label>
                <div className="mt-[10px] flex items-center w-[100%] h-[40px] py-[25px] px-[10px] border-[1.5px] border-[#f5a218] rounded-xl">
                  <div className="mr-[5px] bg-[#f5a218] p-[10px] rounded-lg ">
                    <img src={lock} alt="" className="" />
                  </div>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="h-[40px] w-[100%] border-none outline-none"
                  />
                </div>
              </div>
              <div className="mt-[30px]">
                <button className="bg-[#f4a319] font-bold text-[20px] w-full h-[50px] rounded-xl">
                  Log-In Now
                </button>
              </div>
              <div className="mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] flex flex-col md:flex-row md:justify-between font-medium">
                <span>Forgot Password? Click Here</span>
                <span className="mt-[10px] sm:ml-[0px]">
                  Dont't Have An Account? Signup Now
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
