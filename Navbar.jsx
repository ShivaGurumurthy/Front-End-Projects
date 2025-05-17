import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="flex h-[80px] w-full  shadow-2xl">
        <nav className="flex h-full w-full mx-80 items-center">
        <a href="https://starbucks.in"><img
          src="https://starbucks.in/assets/icon/logo.png"
          alt="Starbucks Logo"
          className="shrink-0 h-[35px] w-[45px]"
        /></a>
        <ul className="flex gap-8 text-3xl items-center p-16">
          <li>Home</li>
          <li>Gift</li>
          <li>Order</li>
          <li>Pay</li>
          <li>Store</li>
        </ul>
        <div className="flex justify-end relative ml-auto w-full pr-[200px] items-center">
          <div className="h-[40px] w-[250px] flex items-center shadow-md shadow-b rounded-full bg-white">
            <input
              type="text"
              placeholder="Looking for something specific?"
              className="w-full text-center bg-transparent px-4"
            />
          </div>
          <FaRegCircleUser className="text-[#6B6B6B] text-[30px] relative left-[50px]"/>
        </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
