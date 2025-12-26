import React from 'react';
import { getSteveResponse } from '../services/geminiService';
import { supabase } from '../lib/supabase';

const Home: React.FC = () => {
  const [confession, setConfession] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleConfess = async () => {
    if (!confession.trim()) return;
    setLoading(true);
    const res = await getSteveResponse(confession);
    setResponse(res);

    // Persist to Supabase
    if (!supabase) {
      console.warn('Supabase not configured; skipping confession persistence.');
    } else {
      const { error } = await supabase
        .from('confessions')
        .insert([{
          sin: confession,
          penance: res
        }]);

      if (error) {
        console.error('Error saving confession to Supabase:', error);
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full bg-hero-pattern bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="font-display text-secondary text-6xl sm:text-8xl md:text-9xl uppercase leading-none tracking-tight mb-6 drop-shadow-2xl animate-fade-in">
            Forgive Us, <br className="hidden sm:block" /> We're Day <br className="hidden sm:block" /> Drunk.
          </h1>
          <div className="w-24 h-px bg-secondary/70 mx-auto my-8"></div>
          <p className="text-secondary/90 text-xl sm:text-2xl font-light tracking-wide mb-10 drop-shadow-md italic">
            You bring the vibes. We'll bring the rituals.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#/about" className="bg-primary hover:bg-orange-600 text-white font-display uppercase tracking-widest text-xl px-10 py-4 rounded shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl duration-300">
              Join the Inner Circle
            </a>
            <button
              onClick={() => document.getElementById('confession-booth')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white font-display uppercase tracking-widest text-xl px-10 py-4 rounded hover:bg-white hover:text-black transition-all duration-300"
            >
              Shout into the Void
            </button>
          </div>
        </div>
      </section>

      {/* Confession Booth Section */}
      <section id="confession-booth" className="py-24 bg-background-light px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 text-white p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-2 rounded-bl uppercase tracking-widest">
              AI Powered • Beta Feature
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-4xl text-primary">campaign</span>
                  <h2 className="font-display text-4xl uppercase tracking-tight">Confession Booth</h2>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Too lazy to visit us in person? Yell your sins at Steve's digital avatar. Steve is technically listening (not really, but the AI is).
                </p>
                <div className="space-y-4">
                  <textarea
                    value={confession}
                    onChange={(e) => setConfession(e.target.value)}
                    placeholder="Type your deepest secrets here. Steve doesn't care, but he'll listen."
                    className="w-full bg-gray-800 border-gray-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition h-32"
                  />
                  <button
                    onClick={handleConfess}
                    disabled={loading}
                    className="w-full bg-primary hover:bg-orange-600 disabled:bg-gray-700 text-white font-display uppercase tracking-widest text-lg py-4 rounded shadow-lg transition-all"
                  >
                    {loading ? 'Transmitting Prayer...' : 'Transmit Prayer'}
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2 min-h-[300px] flex flex-col justify-center">
                {response ? (
                  <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-primary animate-fade-in">
                    <h3 className="text-primary font-display text-xl mb-4 uppercase tracking-widest">Steve's Revelation:</h3>
                    <p className="text-gray-200 text-lg italic leading-relaxed">"{response}"</p>
                    <button
                      onClick={() => setResponse("")}
                      className="mt-6 text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                    >
                      Clear the Air
                    </button>
                  </div>
                ) : (
                  <div className="text-center text-gray-600 border-2 border-dashed border-gray-800 rounded-xl p-12">
                    <span className="material-symbols-outlined text-6xl mb-4 opacity-20">hourglass_empty</span>
                    <p className="uppercase tracking-widest text-sm">Waiting for your spiritual input...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Believer Stats */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-8 text-white text-center">
          <div>
            <div className="font-display text-5xl mb-2">4,200+</div>
            <div className="uppercase tracking-widest text-xs font-bold opacity-80">Naps Completed</div>
          </div>
          <div>
            <div className="font-display text-5xl mb-2">12k</div>
            <div className="uppercase tracking-widest text-xs font-bold opacity-80">Sunglasses Found</div>
          </div>
          <div>
            <div className="font-display text-5xl mb-2">99%</div>
            <div className="uppercase tracking-widest text-xs font-bold opacity-80">Chill Rating</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
