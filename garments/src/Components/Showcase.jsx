import { businessData } from '../data/business-data';

function Showcase() {
  return (
    <section id="showcase" className="px-6 py-20 bg-brand-bg">
      <h2 className="font-display text-3xl font-semibold text-center text-brand-maroon mb-2">
        {businessData.showcaseTitle}
      </h2>
      <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {businessData.items.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
          >
            <div className="h-52 bg-brand-maroon/10 flex items-center justify-center text-brand-muted">
              Photo
            </div>
            <span className="absolute top-3 right-3 bg-brand-gold text-brand-text text-xs font-body font-semibold px-3 py-1 rounded-full">
              {item.price}
            </span>
            <div className="p-5 text-center">
              <h3 className="font-display text-xl font-semibold text-brand-text">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Showcase;