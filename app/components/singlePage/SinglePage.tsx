import React from "react";

function SinglePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="product-image">
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Emili Premium Wireless Headphones"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            <div className="carousel-item active">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="View 1"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="View 2"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="View 3"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="View 4"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* Product Details */}
        <div className="space-y-8">
          {/* Title & Rating */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Featured Product
              </span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-gray-900">
              Meet Emili
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Premium wireless headphones engineered for the discerning
              listener. Experience studio-quality sound with supreme comfort.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex gap-1">
                <span className="review-star">★</span>
                <span className="review-star">★</span>
                <span className="review-star">★</span>
                <span className="review-star">★</span>
                <span className="review-star">★</span>
              </div>
              <span className="text-sm text-gray-600">(428 reviews)</span>
            </div>
          </div>
          {/* Price */}
          <div className="space-y-2 border-t border-b border-gray-200 py-6">
            <div className="text-4xl font-bold text-gray-900">$399.00</div>
            <p className="text-sm text-gray-500">
              Free shipping on orders over $100
            </p>
          </div>
          {/* Options */}
          <div className="space-y-6">
            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Color
              </label>
              <div className="flex gap-3">
                <button className="w-12 h-12 rounded-full bg-gray-900 border-2 border-gray-900 cursor-pointer hover:ring-2 ring-gray-400 transition" />
                <button className="w-12 h-12 rounded-full bg-gray-400 border-2 border-gray-300 cursor-pointer hover:ring-2 ring-gray-400 transition" />
                <button className="w-12 h-12 rounded-full bg-blue-600 border-2 border-gray-300 cursor-pointer hover:ring-2 ring-gray-400 transition" />
              </div>
            </div>
            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">
                  −
                </button>
                <input
                  type="number"
                  defaultValue={1}
                  className="w-12 text-center border-0 outline-none"
                  min={1}
                />
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">
                  +
                </button>
              </div>
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="btn-primary px-8 py-4 rounded-lg font-semibold flex-1">
              Add to Cart
            </button>
            <button className="btn-secondary px-8 py-4 rounded-lg font-semibold">
              ♡ Wishlist
            </button>
          </div>
          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">30</p>
              <p className="text-xs text-gray-600">Day Returns</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">2yr</p>
              <p className="text-xs text-gray-600">Warranty</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">✓</p>
              <p className="text-xs text-gray-600">Fast Ship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;
