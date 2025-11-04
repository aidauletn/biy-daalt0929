"use client";
import { useState } from "react";

export default function All() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // 🟢 NEW

  const categories = [
    "All",
    "Bags",
    "Drinkware",
    "Electronics",
    "Footwear",
    "Headwear",
    "Hoodies",
    "Jackets",
    "Kids",
    "Pets",
    "Shirts",
    "Stickers",
  ];

  const products = [
    {
      name: "Acme Keyboard",
      price: "$150.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=1920&q=75",
      category: "Electronics",
      description:
        "Mechanical keyboard with RGB lighting and premium switches.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=1920&q=75",
      ],
    },
    {
      name: "Acme T-Shirt",
      price: "$20.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&w=1920&q=75",
      category: "Shirts",
      description: "60% combed ringspun cotton/40% polyester jersey tee.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&w=1920&q=75",
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75",
      ],
      colors: ["Black", "Blue", "Gray", "Pink", "White"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
    {
      name: "Acme Hoodie",
      price: "$50.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=1920&q=75",
      category: "Hoodies",
      description: "Comfortable cotton blend hoodie with drawstring hood.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=1920&q=75",
      ],
      colors: ["Black", "Gray", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      name: "Circle T-Shirt",
      price: "$30.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75",
      category: "Shirts",
      description: "Classic fit t-shirt with circle design.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75",
      ],
      colors: ["Black", "White"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      name: "Prism T-Shirt",
      price: "$32.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75",
      category: "Shirts",
      description: "Premium cotton t-shirt with prism graphic.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75",
      ],
      colors: ["Black", "Gray", "White"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      name: "Cowboy Hat",
      price: "$80.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcowboy-hat-black-1.png%3Fv%3D1690208765&w=1920&q=75",
      category: "Headwear",
      description: "Classic western style cowboy hat.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcowboy-hat-black-1.png%3Fv%3D1690208765&w=1920&q=75",
      ],
    },
    {
      name: "Slip-On Shoes",
      price: "$65.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&w=1920&q=75",
      category: "Footwear",
      description: "Comfortable slip-on shoes for everyday wear.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&w=1920&q=75",
      ],
    },
    {
      name: "Rainbow Sticker",
      price: "$4.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fsticker-rainbow.png%3Fv%3D1690003602&w=1920&q=75",
      category: "Stickers",
      description: "Vibrant rainbow sticker, weather resistant.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fsticker-rainbow.png%3Fv%3D1690003602&w=1920&q=75",
      ],
    },
    {
      name: "Cup",
      price: "$15.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&w=1920&q=75",
      category: "Drinkware",
      description: "Insulated cup keeps drinks hot or cold.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&w=1920&q=75",
      ],
    },
    {
      name: "Jacket",
      price: "$90.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&w=1920&q=75",
      category: "Jackets",
      description: "Stylish bomber jacket with warm insulation.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&w=1920&q=75",
      ],
      colors: ["Army", "Black"],
      sizes: ["M", "L", "XL", "XXL"],
    },
    {
      name: "Baby Cap",
      price: "$25.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&w=1920&q=75",
      category: "Headwear",
      description: "Soft cotton cap for babies.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&w=1920&q=75",
      ],
    },
    {
      name: "Baby Onesie",
      price: "$22.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&w=1920&q=75",
      category: "Kids",
      description: "Comfortable onesie for infants.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&w=1920&q=75",
      ],
      colors: ["Beige", "White", "Pink"],
      sizes: ["0-3M", "3-6M", "6-12M"],
    },
    {
      name: "Acme Sticker",
      price: "$3.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fsticker.png%3Fv%3D1690003619&w=1920&q=75",
      category: "Stickers",
      description: "Official Acme logo sticker.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fsticker.png%3Fv%3D1690003619&w=1920&q=75",
      ],
    },
    {
      name: "Mug",
      price: "$12.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=1920&q=75",
      category: "Drinkware",
      description: "Ceramic mug with Acme branding.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=1920&q=75",
      ],
    },
    {
      name: "Drawstring Bag",
      price: "$18.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=1920&q=75",
      category: "Bags",
      description: "Lightweight drawstring bag for daily use.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=1920&q=75",
      ],
    },
    {
      name: "Pacifier",
      price: "$9.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&w=1920&q=75",
      category: "Kids",
      description: "BPA-free baby pacifier.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&w=1920&q=75",
      ],
      colors: ["Blue", "Pink", "White"],
      sizes: ["0-6M", "6M+"],
    },
    {
      name: "Dog Sweater",
      price: "$9.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fdog-sweater-1.png%3Fv%3D1690003132&w=1920&q=75",
      category: "Pets",
      description: "Warm sweater for small dogs.",
      images: [
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fdog-sweater-1.png%3Fv%3D1690003132&w=1920&q=75",
      ],
    },
  ];

  const filteredProducts = products.filter(
    (p) =>
      (activeCategory === "All" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ProductDetail = ({ product, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(
      product.colors?.[0] || null
    );
    const [selectedSize, setSelectedSize] = useState(
      product.sizes?.[0] || null
    );

    const isClothing = ["Shirts", "Hoodies", "Jackets", "Kids"].includes(
      product.category
    );

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-neutral-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-neutral-900 border-b border-gray-800 p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Product Details</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-full"
            >
              ✕
            </button>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative bg-black rounded-xl overflow-hidden flex items-center justify-center h-[500px]">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="object-contain w-full h-full p-8"
              />

              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/70 px-4 py-2 rounded-full border border-gray-700">
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? product.images.length - 1 : prev - 1
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded-full"
                  >
                    ←
                  </button>
                  <span className="text-sm">
                    {currentImageIndex + 1} / {product.images.length}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (prev) => (prev + 1) % product.images.length
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded-full"
                  >
                    →
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-bold">{product.name}</h1>

              <div className="inline-block w-fit">
                <span className="bg-blue-600 text-white text-lg px-6 py-2 rounded-full">
                  {product.price}
                </span>
              </div>

              {isClothing && product.colors && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                    COLOR
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-2 rounded-full border transition ${
                          selectedColor === color
                            ? "bg-white text-black border-white"
                            : "bg-transparent text-white border-gray-700 hover:border-gray-500"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isClothing && product.sizes && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                    SIZE
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-5 py-2 rounded-full border transition ${
                          selectedSize === size
                            ? "bg-white text-black border-white"
                            : "bg-transparent text-white border-gray-700 hover:border-gray-500"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {product.description}
              </p>

              {/* Add to Cart */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-full flex items-center justify-center gap-2 transition text-lg">
                <span className="text-2xl">+</span>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex">

      <aside className="hidden md:flex flex-col w-56 border-r border-gray-800 p-6 text-sm gap-3">
        <h2 className="text-gray-400 uppercase tracking-wider text-xs mb-3">
          Collections
        </h2>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-left hover:text-white ${
              activeCategory === cat
                ? "text-white font-medium"
                : "text-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </aside>

      <div className="flex-1">
 
        <header className="flex items-center justify-between px-6 h-16 border-b border-gray-800 relative">
          <div className="flex items-center gap-8">
            <a href="/biydaalt1" className="font-semibold">
              ACME STORE
            </a>

            <nav className="hidden md:flex gap-6 text-gray-400">
              <a href="/all" className="text-white font-medium">
                All
              </a>
              <a href="#" className="hover:text-white">
                Shirts
              </a>
              <a href="#" className="hover:text-white">
                Stickers
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="hidden sm:block bg-neutral-900 text-sm text-gray-300 px-4 py-2 rounded-md w-64 outline-none placeholder-gray-500"
            />

            <button className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md">
              🛒
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md"
            >
              ☰
            </button>
          </div>

          {menuOpen && (
            <div className="absolute right-4 top-16 bg-neutral-900 border border-gray-700 rounded-lg shadow-xl p-4 flex flex-col gap-4 md:hidden z-50">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setMenuOpen(false);
                  }}
                  className={`${
                    activeCategory === cat
                      ? "text-white font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}

              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-neutral-800 text-sm text-gray-300 px-3 py-2 rounded-md outline-none placeholder-gray-500"
              />
            </div>
          )}
        </header>

        <main className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500 text-center col-span-full">
              No products found.
            </p>
          ) : (
            filteredProducts.map((product, i) => (
              <div
                key={i}
                onClick={() => setSelectedProduct(product)} 
                className="bg-neutral-900 rounded-2xl overflow-hidden relative hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-[280px] bg-black"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black/70 px-4 py-2 rounded-full border border-gray-700">
                  <span className="text-sm font-medium">{product.name}</span>
                  <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                    {product.price}
                  </span>
                </div>
              </div>
            ))
          )}
        </main>
      </div>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}