import { useCartStore } from "@/stores/cartStore";
// import { useThemeStore } from "@/stores/themeStore";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  // const isDark = useThemeStore((state) => state.isDark);
  // const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const totalQuantity = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="flex items-center justify-between px-4 lg:px-12 py-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 ">
      <Link href="/">Mini Commerce</Link>
      <div>
        {/* <button
          onClick={toggleTheme}
          className="p-2 rounded border border-gray-300 dark:border-gray-600"
        >
          {isDark ? (
            <Sun className="text-yellow-400" />
          ) : (
            <Moon className="text-gray-800" />
          )}
        </button> */}
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
