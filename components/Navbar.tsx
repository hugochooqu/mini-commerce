import React from "react";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-4  text-black">
      <p>Mini Commerce</p>
      <button>
        <AiOutlineShoppingCart className="text-2xl" />
      </button>

    </nav>
  );
};

export default Navbar;
