export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div>

        {/* Top Badge */}
<div className="mb-6">
  <span className="inline-block bg-brand-light text-brand text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full">
    Certified quality from Germany
  </span>
</div>


        <h1 className="text-5xl font-bold leading-tight mb-6">
          New iPhone & Samsung.
          <br />
          <span className="text-brand">Smart Prices.</span>
          <br />
          German Warranty.
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Certified new devices with fast delivery across Germany
        </p>

       {/* Buttons */}
<div className="flex gap-6 mb-10">

  {/* Primary */}
  <button className="group inline-flex items-center gap-3 h-[54px] px-8 rounded-full 
    bg-brand text-white font-medium
    shadow-[0_8px_20px_rgba(68,136,252,0.35)]
    hover:bg-brand-hover hover:shadow-[0_10px_25px_rgba(68,136,252,0.45)]
    transition-all duration-200">

    Shop iPhone

    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>

  {/* Secondary */}
  <button className="group inline-flex items-center gap-3 h-[54px] px-8 rounded-full
    border-[1.6px] border-brand text-brand font-medium
    hover:bg-brand hover:text-white
    transition-all duration-200">

    Shop Samsung

    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>

</div>

        {/* Rating */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#FFB348] fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          <span className="font-medium text-gray-800">
            4.8/5
          </span>

          <span className="text-gray-300">|</span>

          <span className="text-gray-500">
            Over 15,000 satisfied customers
          </span>
        </div>
      </div>

      {/* Right Placeholder */}
      <div className="bg-gray-100 h-[400px] rounded-3xl flex items-center justify-center text-gray-400 text-lg">
        Product Image
      </div>

    </section>
  );
}
