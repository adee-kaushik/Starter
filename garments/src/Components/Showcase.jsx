import { businessData } from '../data/business-data';

function Showcase() {
  return (
    <section id="showcase" className="px-6 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        {businessData.showcaseTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {businessData.items.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              Photo
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Showcase;