import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600">
              <ul className="flex items-center gap-8 text-gray-700 font-medium">
                <li className="cursor-pointer hover:text-blue-600 transition">
                  <Link href="/">Home</Link>
                </li>
                <li className="cursor-pointer hover:text-blue-600 transition">
                  <Link href="/shop">Shop</Link>
                </li>
                <li className="cursor-pointer hover:text-blue-600 transition">
                  Blog
                </li>
              </ul>
            </span>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center px-8">
            <div className="w-full max-w-lg relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 border-none rounded-full py-2 px-10 focus:ring-2 focus:ring-indigo-500"
              />
              <i className="fa-solid fa-magnifying-glass absolute left-4 top-3 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-indigo-600">
              <i className="fa-regular fa-user text-xl" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600 relative">
              <i className="fa-solid fa-cart-shopping text-xl" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
