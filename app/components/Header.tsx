import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Image
          src="/logo_large.svg"
          alt="Handyswap logo"
          width={140}
          height={40}
          priority
        />

        {/* Search */}
        <div className="w-1/2 relative">
          <input
            type="text"
            placeholder="What are you looking for? (e.g. iPhone 15, Samsung S24)"
            className="w-full bg-gray-50 border border-gray-200 rounded-full pl-10 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Search icon */}
          <svg
            className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>

          {/* Blue action button */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">
            →
          </div>
        </div>

        {/* Right menu */}
        <div className="flex gap-8 text-gray-600">

  {/* Account */}
  <div className="flex flex-col items-center text-xs hover:text-gray-900 cursor-pointer transition">
    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M5.121 17.804A9 9 0 1118.879 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    Account
  </div>

  {/* Wishlist */}
  <div className="flex flex-col items-center text-xs hover:text-gray-900 cursor-pointer transition">
    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
    Wishlist
  </div>

  {/* Cart */}
  <div className="flex flex-col items-center text-xs relative hover:text-gray-900 cursor-pointer transition">
    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h12m-5-5v5m-4-5v5" />
    </svg>
    Cart
    <span className="absolute -top-1 -right-3 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
      2
    </span>
  </div>

</div>


      </div>
    </header>
  );
}
