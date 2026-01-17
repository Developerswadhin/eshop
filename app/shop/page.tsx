import getAllProduct from "@/libs/getAllProduct";
import Link from "next/link";
import React from "react";
import { FaRegHeart, FaPlus, FaHeart } from "react-icons/fa";
async function page() {
  const getProduct = await getAllProduct();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded text-indigo-600"
                    />{" "}
                    <span>Electronics</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded text-indigo-600"
                    />{" "}
                    <span>Fashion</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded text-indigo-600"
                    />
                    <span>Accessories</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded text-indigo-600"
                    />{" "}
                    <span>Home &amp; Living</span>
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Price Range</h3>
              <input
                type="range"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
              Apply Filters
            </button>
          </div>
        </aside>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">
              New Arrivals{" "}
              <span className="text-gray-400 font-normal text-sm ml-2">
                124 items
              </span>
            </h1>
            <select className="bg-transparent border-none text-sm font-medium focus:ring-0 cursor-pointer">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {getProduct.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-200">
                    <Link href={`/shop/${item.id}`}>
                      <img
                        src={item.image}
                        alt="Watch"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition">
                      <span>
                        <FaRegHeart />
                      </span>
                    </button>
                    <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wider mb-1">
                      {item.category}
                    </p>
                    <h2 className="text-gray-900 font-bold mb-2 group-hover:text-indigo-600 transition">
                      {item.title}
                    </h2>
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 text-xs">
                        <span></span>
                      </div>
                      <span className="text-gray-400 text-xs ml-2">(42)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">
                        $ {item.price}
                      </span>
                      <button className="bg-gray-900 text-white p-2 rounded-lg hover:bg-indigo-600 transition">
                        <span>
                          <FaPlus />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
