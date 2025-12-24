"use client";

export default function CompareProductsSection() {
  return (
    <section id="compare-section" className="bg-black py-16 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Title & Select Dropdowns */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
            Select the product
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <select className="w-full md:w-96 px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-400 focus:outline-none cursor-pointer">
              <option className="bg-gray-900 text-gray-400">Select Any Product</option>
            </select>

            <select className="w-full md:w-96 px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-400 focus:outline-none cursor-pointer">
              <option className="bg-gray-900 text-gray-400">Select Any Product</option>
            </select>
          </div>
        </div>

        {/* Comparison Table - Static UI Only */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-400 text-left mb-8">Products</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Images Row */}
              <thead>
                <tr>
                  <td className="w-48 pb-12 text-left text-gray-500 font-medium"></td>
                  <td className="pb-12 text-center">
                    <div className="w-64 h-80 mx-auto bg-gray-900 rounded-2xl flex flex-col items-center justify-center border border-gray-800 gap-4">
                      <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-500 text-xl font-bold uppercase tracking-wider">
                        No Image Available
                      </span>
                    </div>
                  </td>
                  <td className="pb-12 text-center">
                    <div className="w-64 h-80 mx-auto bg-gray-900 rounded-2xl flex flex-col items-center justify-center border border-gray-800 gap-4">
                      <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-500 text-xl font-bold uppercase tracking-wider">
                        No Image Available
                      </span>
                    </div>
                  </td>
                </tr>
              </thead>

              {/* Table Rows */}
              <tbody className="text-gray-300">
                {[
                  "Title",
                  "Description",
                  "Ratings",
                  "Type",
                  "Brand",
                  "Price",
                  "Top Notes",
                  "Middle Notes",
                  "Base Notes",
                  "Longevity",
                  "Sillage",
                  "Projection",
                ].map((label, index) => (
                  <tr key={index} className="border-t border-gray-800">
                    <td className="py-6 pr-8 text-left text-gray-400 font-medium">{label}</td>
                    <td className="py-6 text-center text-gray-500">N/A</td>
                    <td className="py-6 text-center text-gray-500">N/A</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}