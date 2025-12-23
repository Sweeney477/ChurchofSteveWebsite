
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-hero-pattern bg-cover bg-fixed">
      <div className="absolute inset-0 bg-black/85 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col items-center">
        <header className="text-center mb-16">
          <h1 className="font-display text-secondary text-7xl md:text-9xl uppercase leading-none drop-shadow-2xl">
            Who Is <span className="text-primary">Steve?</span>
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto my-8"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-xl z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl bg-black aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" 
                alt="Portrait of Steve" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-[10px] text-white/50 uppercase tracking-widest italic">Artist's interpretation. Actual Steve may vary (might have more crumbs on shirt).</p>
              </div>
            </div>
          </div>

          <div className="text-secondary font-light space-y-8 text-xl md:text-2xl leading-relaxed drop-shadow-lg">
            <p className="first-letter:text-6xl first-letter:font-display first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:mt-2">
              Some say he was born from a lightning strike hitting a jukebox playing Yacht Rock. Others claim he’s simply a collective hallucination induced by drinking too much oat milk at a silent disco.
            </p>
            <p>
              Steve isn’t a guru. He doesn't want your money (well, maybe a little for "operational costs" like artisanal pizza dough). He just wants you to realize that 90% of your problems can be solved by a nap and a pair of really good polarized sunglasses.
            </p>
            <p className="font-bold text-white border-l-4 border-primary pl-8 italic">
              His philosophy is simple: "If it requires pants, is it really worth doing?" 
            </p>
            <p>
              We strive to answer that question every single day through our Sacred Archives of Naps and the ritual of the Tuesday Afternoon Meditation.
            </p>
            <div className="pt-10">
              <button className="bg-transparent hover:bg-primary text-primary hover:text-white border-2 border-primary font-display uppercase tracking-widest text-lg px-10 py-4 rounded transition-all duration-300">
                Read the Manifesto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
