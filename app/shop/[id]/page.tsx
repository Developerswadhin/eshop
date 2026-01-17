import React from "react";

import "@/app/globals.css";
import singleProduct from "@/libs/singleProduct";

type PageProps = {
  params: {
    id: number;
  };
};

async function page({ params }: PageProps) {
  const { id } = await params;

  const sProduct = await singleProduct(id);

  return (
    <main className="max-w-6xl mx-auto p-6 md:py-12 flex flex-col gap-12">
      <section className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-center border border-slate-100">
            <img
              src={sProduct.image}
              alt="Mascara"
              className="max-w-full h-auto object-contain"
            />
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-24 h-24 bg-white border-2 border-pink-500 rounded-lg p-2 flex items-center justify-center">
              <img
                src={sProduct.image}
                alt="Thumb"
                className="object-cover max-w-15"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col gap-2">
            <span className="text-pink-600 font-bold text-sm tracking-widest uppercase">
              Beauty / Mascara
            </span>
            <h1 className="text-4xl font-extrabold text-slate-800 leading-tight">
              Essence Mascara <br />
              Lash Princess
            </h1>
            <div className="flex flex-row items-center gap-3 mt-2">
              <div className="flex flex-row text-yellow-400 text-sm">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
                <i className="fa-regular fa-star" />
                <i className="fa-regular fa-star" />
              </div>
              <span className="text-sm text-slate-400 font-medium">
                2.56 Rating
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold uppercase">
                In Stock
              </span>
            </div>
          </div>
          <div className="flex flex-row items-baseline gap-3 mt-8">
            <span className="text-4xl font-black text-slate-900">$9.99</span>
            <span className="text-xl text-slate-400 line-through font-medium">
              $11.16
            </span>
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              -10.48%
            </span>
          </div>
          <p className="mt-6 text-slate-600 leading-relaxed border-l-4 border-pink-200 pl-4">
            The Essence Mascara Lash Princess is a popular mascara known for its
            volumizing and lengthening effects. Achieve dramatic lashes with
            this long-lasting and cruelty-free formula.
          </p>
          <div className="mt-10 p-6 bg-slate-900 rounded-2xl flex flex-col gap-4 text-white">
            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">
                  Min. Order Quantity
                </p>
                <p className="text-xl font-bold">48 Units</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">
                  SKU
                </p>
                <p className="font-mono text-sm">BEA-ESS-ESS-001</p>
              </div>
            </div>
            <button className="w-full bg-pink-500 hover:bg-pink-600 py-4 rounded-xl font-bold transition-all transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-pink-500/20">
              ADD TO BULK CART
            </button>
          </div>
          <div className="mt-8 flex flex-row flex-wrap gap-y-4 gap-x-8 border-t border-slate-200 pt-8">
            <div className="flex flex-row items-center gap-3">
              <i className="fa-solid fa-truck-fast text-slate-400" />
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-tight">
                Ships 3-5 days
              </span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <i className="fa-solid fa-shield-check text-slate-400" />
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-tight">
                1 Week Warranty
              </span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <i className="fa-solid fa-circle-xmark text-red-400" />
              <span className="text-xs font-semibold text-red-400 uppercase tracking-tight italic">
                No Returns
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-12">
        <div className="flex-[1.5] flex flex-col gap-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="w-8 h-1 bg-pink-500 inline-block" />
            Specifications
          </h3>
          <div className="flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200">
            <div className="flex flex-row justify-between p-4 border-b border-slate-100">
              <span className="text-slate-400 font-medium">Weight</span>
              <span className="font-bold">4 units</span>
            </div>
            <div className="flex flex-row justify-between p-4 border-b border-slate-100">
              <span className="text-slate-400 font-medium">
                Dimensions (W×H×D)
              </span>
              <span className="font-bold">15.14 x 13.08 x 22.99</span>
            </div>
            <div className="flex flex-row justify-between p-4">
              <span className="text-slate-400 font-medium">Barcode</span>
              <span className="font-mono text-xs">5784719087687</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="w-8 h-1 bg-slate-400 inline-block" />
            Recent Reviews
          </h3>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-row gap-4">
              <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold flex-none">
                E
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800">
                  Eleanor Collins
                </span>
                <p className="text-sm text-slate-600 italic mt-1">
                  Highly impressed!
                </p>
                <div className="flex flex-row text-[10px] text-yellow-400 mt-2">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-row gap-4 opacity-75">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold flex-none">
                L
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800">
                  Lucas Gordon
                </span>
                <p className="text-sm text-slate-600 italic mt-1">
                  Very satisfied
                </p>
                <div className="flex flex-row text-[10px] text-yellow-400 mt-2">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-regular fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
