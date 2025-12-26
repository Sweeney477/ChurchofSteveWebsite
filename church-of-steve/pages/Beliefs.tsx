import React, { useEffect, useState } from 'react';
import { sanity } from '../lib/sanity';

const Beliefs: React.FC = () => {
  const [tenets, setTenets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTenets = async () => {
      try {
        if (!sanity) {
          console.warn('Sanity not configured; skipping tenets fetch.');
          return;
        }
        const data = await sanity.fetch(`*[_type == "tenet"]`);
        setTenets(data);
      } catch (error) {
        console.error('Error fetching tenets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTenets();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-hero-pattern bg-cover bg-fixed">
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="font-display text-secondary text-7xl uppercase leading-none mb-6 drop-shadow-lg">
            The Tenets of Chill
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-secondary/90 text-xl font-light tracking-wide">
            We don't ask for much. Just good vibes, comfortable shoes, and a general disregard for urgency. Here is what we hold (mostly) sacred.
          </p>
        </header>

        {loading ? (
          <div className="text-center text-white font-display uppercase tracking-widest py-20">Loading Vibes...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tenets.map((tenet, idx) => (
              <div
                key={tenet._id || idx}
                className={`bg-secondary p-8 rounded shadow-xl transform transition duration-300 hover:-translate-y-2 group border-t-4 border-primary ${idx === 1 ? 'md:translate-y-8' : ''
                  }`}
              >
                <span className="material-icons text-primary text-6xl mb-6 block transform -rotate-6 group-hover:rotate-0 transition-transform">
                  {tenet.icon}
                </span>
                <h3 className="font-display text-3xl text-gray-800 uppercase mb-4 tracking-tight">{tenet.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{tenet.description}</p>
              </div>
            ))}

            {/* Fallback/Default static items if needed or just let Sanity handle all */}
          </div>
        )}

        <div className="bg-secondary p-8 rounded shadow-xl transform hover:-translate-y-2 transition duration-300 border-t-4 border-primary">
          <span className="material-icons text-primary text-6xl mb-6 block transform rotate-12">library_music</span>
          <h3 className="font-display text-3xl text-gray-800 uppercase mb-4 tracking-tight">THINK IN TRACKS</h3>
          <p className="text-gray-600 text-lg leading-relaxed">We don't want 10% of your income. We want 10% of your Spotify playlists. A good beat saves more souls than a sermon.</p>
        </div>

        <div className="bg-secondary p-8 rounded shadow-xl transform md:translate-y-8 hover:translate-y-6 transition duration-300 border-t-4 border-primary">
          <span className="material-icons text-primary text-6xl mb-6 block transform -rotate-2">sentiment_satisfied_alt</span>
          <h3 className="font-display text-3xl text-gray-800 uppercase mb-4 tracking-tight">Judge Not the Vibe</h3>
          <p className="text-gray-600 text-lg leading-relaxed">Unless the vibe is toxic. Then, judge away. We are a sanctuary for chill, not a parking lot for negativity.</p>
        </div>

        <div className="bg-secondary p-8 rounded shadow-xl transform hover:-translate-y-2 transition duration-300 border-t-4 border-primary">
          <span className="material-icons text-primary text-6xl mb-6 block transform rotate-6 text-shadow">restaurant</span>
          <h3 className="font-display text-3xl text-gray-800 uppercase mb-4 tracking-tight">The Daily Bread</h3>
          <p className="text-gray-600 text-lg leading-relaxed">And by bread, we usually mean tacos. Or donuts. Basically any carb is considered a holy relic in the Church of Steve.</p>
        </div>
      </div>

      <div className="mt-32 text-center">
        <button className="bg-primary hover:bg-orange-600 text-white font-display uppercase tracking-widest text-2xl px-12 py-5 rounded shadow-2xl transition-all hover:scale-105 active:scale-95">
          I Accept These Terms
        </button>
        <p className="mt-4 text-secondary/60 text-sm italic font-light">
          By clicking, you agree to absolutely nothing legally binding.
        </p>
      </div>
    </div>
  );
};

export default Beliefs;
