import getAllProduct from "@/libs/getAllProduct";
import React from "react";
type reqData = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};
async function loading() {
  const getProduct = await getAllProduct();
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <div className="max-w-sm w-full mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10" />
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded" />
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2" />
                    <div className="h-2 bg-slate-200 rounded col-span-1" />
                  </div>
                  <div className="h-2 bg-slate-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {getProduct.map((item: reqData, index: number) => {
              return (
                <div
                  key={index}
                  className="max-w-sm w-full mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow"
                >
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-200 h-10 w-10" />
                    <div className="flex-1 space-y-6 py-1">
                      <div className="h-2 bg-slate-200 rounded" />
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-200 rounded col-span-2" />
                          <div className="h-2 bg-slate-200 rounded col-span-1" />
                        </div>
                        <div className="h-2 bg-slate-200 rounded" />
                      </div>
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

export default loading;
