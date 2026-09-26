import { businessData } from '../data/business-data';

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 bg-brand-maroon overflow-hidden">
      <div className="absolute inset-0 'bg-gradient-to-b' from-brand-maroon/80 to-brand-maroon/95"></div>
      <div className="relative z-10">
        <h1 className="font-display text-4xl md:text-6xl font-semibold text-white max-w-2xl">
          {businessData.name}
        </h1>
        <p className="mt-4 font-body text-lg text-white/85 max-w-xl mx-auto">
          {businessData.tagline}
        </p>
        <a
          href="#showcase"
          className="inline-block mt-8 px-7 py-3 bg-brand-gold text-brand-text font-body font-semibold rounded-full hover:opacity-90"
        >
          View Collections
        </a>
      </div>
    </section>
  );
}

export default Hero;