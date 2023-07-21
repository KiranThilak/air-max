import React from "react";
import shoes from "./img/shoes.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col h-[100vh] overflow-hidden">
      <div className="bg-black  mx-auto flex flex-col md:flex-row items-center justify-between text-center  ">
        <div className="w-full md:w-1/2 px-8">
          <h1 className="text-white font-bold text-4xl md:text-6xl whitespace-nowrap lg:text-7xl black-ops">
            AIR MAX
          </h1>
          <h1 className="text-white  text-xl md:text-3xl whitespace-nowrap lg:text-3xl pb-20">
            NIKE AIR MAX 90
          </h1>
          <h3 className="text-white font-bold text-2xl md:text-3xl whitespace-nowrap lg:text-4xl pb-5">
            $98
          </h3>
          <p className="text-white text-xs  font-thin">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex justify-start mt-6 py-10">
            <button className="px-4 py-2 mr-2 bg-grey-100  rounded-full text-white bg-[#585B61]">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <img src={shoes} alt="shoes" className="w-full md:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
