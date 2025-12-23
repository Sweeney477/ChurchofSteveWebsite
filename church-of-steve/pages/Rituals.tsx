import React, { useEffect, useState } from 'react';
import { sanity } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanity);
function urlFor(source: any) {
  return builder.image(source);
}

const Rituals: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await sanity.fetch(`*[_type == "event"] | order(date asc)`);
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="relative w-full h-[60vh] bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-white text-7xl md:text-9xl uppercase leading-none drop-shadow-2xl">
              Rituals & <br /> Gatherings
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto my-8"></div>
            <p className="text-secondary text-xl font-light tracking-widest">
              STRICTLY ENFORCED FUN. MOSTLY LEGAL. BRING SNACKS.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-20 -mt-24 relative z-10">
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="material-symbols-outlined text-4xl text-primary">event_upcoming</span>
            <h3 className="font-display text-4xl text-gray-900 uppercase">Impending Doom (Upcoming)</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full text-center py-20 font-display uppercase tracking-widest text-gray-400">Loading Events...</div>
            ) : (
              events.map((event) => (
                <div key={event._id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col">
                  <div className="h-56 overflow-hidden relative">
                    <img src={event.image ? urlFor(event.image).url() : "https://images.unsplash.com/photo-1516383748821-653a995e8616?q=80&w=1000&auto=format&fit=crop"} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-primary text-white font-display text-center px-4 py-2 rounded shadow-lg">
                      <div className="text-xs uppercase tracking-widest opacity-80">{event.month}</div>
                      <div className="text-3xl font-bold leading-none">{event.date}</div>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h4 className="font-display text-2xl mb-4 text-gray-900 leading-tight">{event.title}</h4>
                    <p className="text-gray-600 mb-6 italic">"{event.description}"</p>
                    <div className="mt-auto space-y-3 text-sm text-gray-500 border-t pt-6">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg text-primary">schedule</span> {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg text-primary">location_on</span> {event.location}
                      </div>
                    </div>
                    <button className="mt-8 w-full bg-gray-900 text-white py-4 uppercase font-display tracking-widest text-sm hover:bg-primary transition-colors rounded">
                      {event.cta}
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* Special Ritual Card */}
            <div className="bg-primary/5 border-2 border-dashed border-primary/30 rounded-2xl flex flex-col items-center justify-center p-8 text-center min-h-[500px]">
              <span className="material-symbols-outlined text-6xl text-primary mb-4 opacity-50">add_circle</span>
              <h4 className="font-display text-2xl mb-4">Suggest a Ritual</h4>
              <p className="text-sm text-gray-500 max-w-[200px] mb-8">Got a dumb idea for a gathering? Steve might approve it if there's pizza involved.</p>
              <button className="border border-primary text-primary px-6 py-2 rounded uppercase font-display tracking-widest text-xs hover:bg-primary hover:text-white transition-all">Submit Idea</button>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-12 shadow-lg border">
          <div className="flex items-center gap-3 mb-12 border-b-2 border-gray-100 pb-4">
            <span className="material-symbols-outlined text-4xl text-gray-400">history_edu</span>
            <h3 className="font-display text-4xl text-gray-600 uppercase tracking-tight">The Archives (Things We Did)</h3>
          </div>

          <div className="space-y-12">
            {[
              { date: 'Sept 12', year: '2023', title: "The 'Who Ate My Yogurt?' Inquisition", desc: "Tensions were high in the communal kitchen. Steve confessed after 15 minutes of intense staring. We moved on, but the trust was broken." },
              { date: 'Aug 04', year: '2023', title: "Silent Disco for Introverts", desc: "We gathered in a large room, stood in corners, and didn't make eye contact. It was the most connected we've ever felt." }
            ].map((arch, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start relative">
                <div className="md:w-32 flex-shrink-0 flex md:flex-col items-center md:items-end gap-2 pt-1">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{arch.date}</span>
                  <span className="text-xs text-gray-400">{arch.year}</span>
                </div>
                <div className="flex-grow pb-12 border-b last:border-0 border-gray-100 w-full">
                  <h4 className="font-display text-2xl text-gray-800 mb-4">{arch.title}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{arch.desc}</p>
                  <div className="bg-secondary p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-sm italic text-gray-700">"The snacks were okay, but the vibe was purely Steve." — Anonymous Believer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Rituals;
