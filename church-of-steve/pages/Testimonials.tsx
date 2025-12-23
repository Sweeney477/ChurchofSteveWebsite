import React, { useEffect, useState } from 'react';
import { sanity } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanity);
function urlFor(source: any) {
  return builder.image(source);
}

const Testimonials: React.FC = () => {
  const [miracles, setMiracles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMiracles = async () => {
      try {
        const data = await sanity.fetch(`*[_type == "miracle"]`);
        setMiracles(data);
      } catch (error) {
        console.error('Error fetching miracles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMiracles();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tighter mb-6">Real People. <br /><span className="text-primary">Mediocre Results.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">The Church of Steve doesn't promise eternal life, but we do promise occasional pleasant surprises. Here's proof.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        {loading ? (
          <div className="text-center py-20 font-display uppercase tracking-widest text-gray-400">Loading Miracles...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {miracles.map((miracle) => (
              <div key={miracle._id} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col gap-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">Miracle ID: {miracle._id.substring(0, 8).toUpperCase()}</span>
                </div>
                <div className="text-primary">
                  <span className="material-symbols-outlined text-6xl opacity-20">format_quote</span>
                </div>
                <p className="text-2xl font-medium leading-relaxed text-gray-800 italic relative z-10">
                  {miracle.content}
                </p>
                <div className="flex items-center gap-4 border-t pt-8 mt-auto">
                  <img src={miracle.image ? urlFor(miracle.image).url() : "https://via.placeholder.com/100"} alt={miracle.author} className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div>
                    <h4 className="font-bold text-gray-900">{miracle.author}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{miracle.role}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined filled">favorite</span>
                    <span className="font-display text-xl">{miracle.likes || 0}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-4xl mb-8 uppercase tracking-widest">Witnessed a Miracle?</h2>
          <p className="text-xl mb-12 opacity-90">Whether it was a free refill or finding a $5 bill in an old jacket, Steve wants to hear about it.</p>
          <button className="bg-white text-primary font-display uppercase tracking-widest text-lg px-12 py-4 rounded-full shadow-2xl hover:scale-105 transition-all">Submit Testimony</button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
