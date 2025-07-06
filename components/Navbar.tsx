'use client';

import { useCartStore } from '@/stores/cartStore';
import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  const totalQuantity = useCartStore(state =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <nav className="flex items-center justify-between px-4 lg:px-12 py-4 bg-white ">
      <Link href="/" className="text-xl">
        Mini Commerce
      </Link>
      <div>
        <Link href="/cart">
          <button className="relative flex flex-row cursor-pointer">
            <AiOutlineShoppingCart className="text-3xl" />
            <span className="absolute right-[-8px] text-[12px] text-white bg-red-500 w-[18px] h-[18px] rounded-[50%] text-center font-semibold">
              {totalQuantity}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
