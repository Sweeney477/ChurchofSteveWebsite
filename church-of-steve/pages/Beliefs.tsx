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
    <div className="min-h-screen bg-hero-pattern bg-cover bg-fixed pt-24">
      <div className="absolute inset-0 z-0 bg-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="mb-6 font-display text-7xl uppercase leading-none text-secondary drop-shadow-lg">
            The Tenets of Chill
          </h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary" />
          <p className="text-xl font-light tracking-wide text-secondary/90">
            We don't ask for much. Just good vibes, comfortable shoes, and a
            general disregard for urgency. Here is what we hold (mostly) sacred.
          </p>
        </header>

        {loading ? (
          <div className="py-20 text-center font-display uppercase tracking-widest text-white">
            Loading Vibes...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tenets.map((tenet, idx) => (
              <div
                key={tenet._id || idx}
                className={`group rounded border-t-4 border-primary bg-secondary p-8 shadow-xl transition duration-300 transform hover:-translate-y-2 ${
                  idx === 1 ? 'md:translate-y-8' : ''
                }`}
              >
                <span className="material-icons mb-6 block transform text-6xl text-primary transition-transform -rotate-6 group-hover:rotate-0">
                  {tenet.icon}
                </span>
                <h3 className="mb-4 font-display text-3xl uppercase tracking-tight text-gray-800">
                  {tenet.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  {tenet.description}
                </p>
              </div>
            ))}

            {/* Fallback/Default static items if needed or just let Sanity handle all */}
          </div>
        )}

        <div className="rounded border-t-4 border-primary bg-secondary p-8 shadow-xl transition duration-300 transform hover:-translate-y-2">
          <span className="material-icons mb-6 block transform rotate-12 text-6xl text-primary">
            library_music
          </span>
          <h3 className="mb-4 font-display text-3xl uppercase tracking-tight text-gray-800">
            THINK IN TRACKS
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            We don't want 10% of your income. We want 10% of your Spotify
            playlists. A good beat saves more souls than a sermon.
          </p>
        </div>

        <div className="rounded border-t-4 border-primary bg-secondary p-8 shadow-xl transition duration-300 transform md:translate-y-8 hover:translate-y-6">
          <span className="material-icons mb-6 block transform -rotate-2 text-6xl text-primary">
            sentiment_satisfied_alt
          </span>
          <h3 className="mb-4 font-display text-3xl uppercase tracking-tight text-gray-800">
            Judge Not the Vibe
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Unless the vibe is toxic. Then, judge away. We are a sanctuary for
            chill, not a parking lot for negativity.
          </p>
        </div>

        <div className="rounded border-t-4 border-primary bg-secondary p-8 shadow-xl transition duration-300 transform hover:-translate-y-2">
          <span className="material-icons mb-6 block transform rotate-6 text-shadow text-6xl text-primary">
            restaurant
          </span>
          <h3 className="mb-4 font-display text-3xl uppercase tracking-tight text-gray-800">
            The Daily Bread
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            And by bread, we usually mean tacos. Or donuts. Basically any carb
            is considered a holy relic in the Church of Steve.
          </p>
        </div>
      </div>

      <div className="mt-32 text-center">
        <button className="rounded bg-primary px-12 py-5 font-display text-2xl uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-105 hover:bg-orange-600 active:scale-95">
          I Accept These Terms
        </button>
        <p className="mt-4 text-sm font-light italic text-secondary/60">
          By clicking, you agree to absolutely nothing legally binding.
        </p>
      </div>
    </div>
  );
};

export default Beliefs;
