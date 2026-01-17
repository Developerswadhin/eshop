"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-indigo-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQ0uid39OCKi3EhM7VnRh-18RRG_AbIdC3w&s"
              alt=""
              className="w-[100px] p-3"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li className="hover:text-indigo-600 transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-indigo-600 transition">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-indigo-600 transition">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>

          {/* Search (Desktop only) */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="w-full max-w-lg relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500"
              />
              <FaSearch className="absolute left-4 top-3 text-gray-400" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <button className="text-gray-600 hover:text-indigo-600">
              <FaUser className="text-xl" />
            </button>

            <button className="relative text-gray-600 hover:text-indigo-600">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-gray-700 text-xl"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/shop">Shop</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500"
                />
                <FaSearch className="absolute left-4 top-3 text-gray-400" />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
