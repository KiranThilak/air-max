import React from "react";
import logo from "./img/logo.png";

const SideBar = () => {
  return (
    <div className=" bg-[#303236] h-screen md:min-h-screen flex flex-col justify-center items-center relative">
      <img src={logo} alt="logo" className="p-5 absolute top-5 max-w-[80%] " />

      <h2 className="text-white text-xl whitespace-nowrap flex items-center ">
        <span className="transform -rotate-90 origin-center">
          STYLISH TEXT OVER
        </span>
      </h2>
    </div>
  );
};

export default SideBar;
