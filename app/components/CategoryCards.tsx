export default function CategoryCards() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-2 gap-10">

        {/* iPhone Card */}
        <a
          href="#"
          className="group bg-gray-50 rounded-3xl p-10 flex items-center justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4">iPhone</h3>
            <p className="text-gray-600 mb-6 max-w-sm">
              Discover the latest Apple models with official German warranty.
            </p>
            <span className="text-blue-600 font-medium group-hover:underline">
              Shop iPhone →
            </span>
          </div>

          <div className="bg-gray-200 w-40 h-40 rounded-2xl flex items-center justify-center text-gray-400">
            Image
          </div>
        </a>

        {/* Samsung Card */}
        <a
          href="#"
          className="group bg-gray-50 rounded-3xl p-10 flex items-center justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4">Samsung</h3>
            <p className="text-gray-600 mb-6 max-w-sm">
              Explore powerful Galaxy smartphones with fast delivery in Germany.
            </p>
            <span className="text-blue-600 font-medium group-hover:underline">
              Shop Samsung →
            </span>
          </div>

          <div className="bg-gray-200 w-40 h-40 rounded-2xl flex items-center justify-center text-gray-400">
            Image
          </div>
        </a>

      </div>
    </section>
  );
}
