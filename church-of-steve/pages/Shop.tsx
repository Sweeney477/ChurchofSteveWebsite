import React, { useEffect, useState } from 'react';
import { sanity } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = sanity ? imageUrlBuilder(sanity) : null;
function urlFor(source: any) {
  return builder ? builder.image(source) : null;
}

const Shop: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (!sanity) {
          console.warn('Sanity not configured; skipping shop fetch.');
          return;
        }
        const data = await sanity.fetch(`*[_type == "shopItem"]`);
        setItems(data);
      } catch (error) {
        console.error('Error fetching shop items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#fafafa]">
      <header className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Official Collection 2024</span>
          <h1 className="font-display text-7xl md:text-9xl text-gray-900 uppercase tracking-tighter mb-8">Steve's <span className="italic">Garb.</span></h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">High-performance comfort for high-performance napping. Limited runs. Unlimited vibes.</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-20">
        {loading ? (
          <div className="text-center py-20 font-display uppercase tracking-widest text-gray-400">Loading Garb...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {items.map((item) => (
              <div key={item._id} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden bg-gray-200 mb-6 rounded-sm relative">
                  <img
                    src={item.image && urlFor(item.image) ? urlFor(item.image)!.url() : "https://via.placeholder.com/300x400"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white text-black py-3 font-display uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all shadow-xl">Quick Add</button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900 uppercase tracking-tight text-lg">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <span className="font-display text-xl text-primary">${item.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="py-24 bg-gray-900 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex whitespace-nowrap opacity-10 pointer-events-none select-none">
          <div className="font-display text-[15rem] text-white uppercase tracking-tighter animate-scroll">CHILL • CHILL • CHILL • CHILL • CHILL • CHILL • CHILL • </div>
          <div className="font-display text-[15rem] text-white uppercase tracking-tighter animate-scroll">CHILL • CHILL • CHILL • CHILL • CHILL • CHILL • CHILL • </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 py-10">
          <h2 className="font-display text-white text-4xl md:text-6xl uppercase mb-10 tracking-widest leading-none">The Gift of <br />Unbotheredness</h2>
          <button className="border-2 border-white text-white font-display uppercase tracking-widest text-lg px-12 py-5 hover:bg-white hover:text-black transition-all">Shop All Accessories</button>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Shop;
