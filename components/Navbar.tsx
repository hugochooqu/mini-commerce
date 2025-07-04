import React from "react";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-4  text-black">
      <p>Mini Commerce</p>
      <button className="relative flex flex-row">
        <AiOutlineShoppingCart className="text-3xl" />
        <span className="absolute right-[-8px] text-[12px] text-white bg-red-500 w-[18px] h-[18px] rounded-[50%] text-center font-semibold">0</span>
      </button>

    </nav>
  );
};

export default Navbar;
