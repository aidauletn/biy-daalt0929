import { useState } from "react";

export default function Home() {
  const products = [
    {
      name: "Acme Baby Cap",
      price: "$10.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&w=1920&q=75",
    },
    {
      name: "Acme Mug",
      price: "$15.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=1920&q=75",
    },
    {
      name: "Acme Hoodie",
      price: "$50.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=1920&q=75",
    },
    {
      name: "Acme Baby Onesie",
      price: "$20.00 USD",
      image:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&w=1920&q=75",
    },
  ];

  const repeated = [...products, ...products, ...products];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = repeated.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <header className="flex items-center justify-between px-6 h-16 border-b border-gray-800">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-semibold">ACME STORE</span>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-400">
            <a href="/all" className="hover:text-white">
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
            className="bg-neutral-900 text-sm text-gray-300 px-4 py-2 rounded-md w-64 outline-none placeholder-gray-500"
          />
          <button className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md">
            🛒
          </button>
        </div>
      </header>

      <main className="flex flex-col md:flex-row gap-4 p-6 justify-center items-center h-[70vh]">
        <div className="flex-[2] bg-neutral-900 rounded-2xl flex items-center justify-center relative h-full overflow-hidden">
          <img
            src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75"
            alt="T-shirt"
            className="object-contain max-h-full w-full h-full"
          />
          <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
            <span className="font-medium">Acme Circles T-Shirt</span>
            <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              $20.00 USD
            </span>
          </div>
        </div>

        <div className="flex-[1] flex flex-col gap-4 h-full">
          <div className="bg-neutral-900 rounded-2xl flex items-center justify-center relative flex-1 overflow-hidden">
            <img
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=1920&q=75"
              alt="Drawstring Bag"
              className="object-contain w-full h-full p-6"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black/70 px-4 py-2 rounded-full border border-gray-700">
              <span>Acme Drawstring Bag</span>
              <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                $12.00 USD
              </span>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl flex items-center justify-center relative flex-1 overflow-hidden">
            <img
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&w=1920&q=75"
              alt="Acme Cup"
              className="object-contain w-full h-full p-6"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black/70 px-4 py-2 rounded-full border border-gray-700">
              <span>Acme Cup</span>
              <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                $15.00 USD
              </span>
            </div>
          </div>
        </div>
      </main>

      <section className="mt-8 overflow-hidden">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No products found.</p>
        ) : (
          <div className="flex gap-4 animate-scroll">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-2xl flex-shrink-0 w-[400px] h-[200px] flex flex-col items-center justify-center hover:scale-[1.03] transition-transform duration-300 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-[120px]"
                />
                <div className="mt-3 text-center">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-blue-500">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 100s linear infinite;
          }
        `}</style>
      </section>

      <footer className="mt-10 bg-[#111] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-2">
            <span className="font-semibold">ACME STORE</span>
          </div>

          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Shipping & Return Policy
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              FAQ
            </a>
          </div>

          <div className="flex justify-end items-start">
            <button className="flex items-center gap-2 bg-transparent border border-gray-700 px-3 py-2 rounded-md hover:bg-gray-800 transition">
              ▲ Deploy
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 text-gray-500 text-sm py-4 flex flex-col md:flex-row justify-between items-center px-6">
          <div>
            © 2023–2025 ACME, Inc. All rights reserved.{" "}
            <a href="#" className="underline hover:text-white ml-2">
              View the source
            </a>
          </div>
          <div className="flex items-center gap-1 mt-2 md:mt-0">
            <span>Created by</span>
            <span className="text-white">▲ Vercel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}