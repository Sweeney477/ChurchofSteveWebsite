
import React from 'react';

const Donate: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-background-light font-spline">
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 aspect-[4/3] bg-hero-pattern bg-cover bg-center rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"></div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Divine Investment Opportunity</span>
          <h1 className="text-gray-900 text-5xl md:text-6xl font-black leading-tight tracking-tighter">
            Give Generously. <br />Steve Needs a Jet Ski.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your hard-earned money is safer in our hands. Mostly because we have better taste in accessories. Support the vision, fund the tan.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-primary text-white font-display uppercase tracking-widest text-lg px-8 py-3 rounded shadow-lg hover:brightness-110 transition-all transform hover:-translate-y-1">
              Support the Cause
            </button>
            <button className="bg-gray-100 text-gray-600 font-display uppercase tracking-widest text-lg px-8 py-3 rounded hover:bg-gray-200 transition-all">
              Read Financials (404)
            </button>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 border-y border-orange-100">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-8">
          <h2 className="text-2xl font-bold font-display uppercase tracking-widest">Current Goal: The S.S. Salvation (Yacht #3)</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100">
            <div className="flex justify-between items-end mb-4">
              <div className="text-left">
                <p className="font-bold text-gray-800">Yacht Fund Progress</p>
                <p className="text-xs text-gray-400">Does not include martini maintenance fees</p>
              </div>
              <p className="text-primary text-3xl font-black">75%</p>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full animate-pulse transition-all duration-1000" style={{ width: '75%' }}></div>
            </div>
            <p className="text-right text-sm font-medium text-gray-500 mt-3">$750,000 raised of $1,000,000 goal</p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-center font-display text-4xl mb-16 uppercase">Choose Your Level of Devotion</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {[
            { title: 'The High Five', price: '5', items: ['Steve thinks about you for exactly 1 second', 'Digital high-five (JPEG format)', 'Generic "Good Vibes" email'] },
            { title: 'The SPF 50 Supporter', price: '25', popular: true, items: ['Everything in previous tier', "Exclusive photo of Steve's lunch", "Access to 'Steve's Jams' Spotify", 'One (1) sticker sent via snail mail'] },
            { title: 'The Platinum Believer', price: '100', items: ['Everything in previous tiers', "Guaranteed spot in 'The Cloud'", "Steve's personal WiFi password", 'VIP Sunglasses Access'] }
          ].map((tier, i) => (
            <div 
              key={i} 
              className={`bg-white p-8 rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-xl ${
                tier.popular ? 'border-2 border-primary ring-4 ring-primary/10 -translate-y-4 scale-105' : 'border-gray-100'
              }`}
            >
              {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>}
              <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">${tier.price}</span>
                <span className="text-gray-400 font-medium text-sm">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-600">
                    <span className="material-symbols-outlined text-primary text-xl">verified</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all ${
                tier.popular ? 'bg-primary text-white shadow-lg hover:brightness-110' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
              }`}>
                Donate ${tier.price}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-10">
          <span className="material-symbols-outlined text-primary text-6xl">format_quote</span>
          <h3 className="text-2xl md:text-3xl font-medium italic leading-relaxed text-gray-800">
            "Before I donated to the Church of Steve, I had money. Now, I have significantly less money, but Steve has a new jet ski. Honestly? Worth it for the vibes."
          </h3>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-hero-pattern bg-cover"></div>
            <div className="text-left">
              <p className="font-bold text-gray-900">Gary "The Giver" Thompson</p>
              <p className="text-sm text-gray-500">Platinum Believer since 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
