import React, { useState, useEffect } from 'react';
import { getSteveResponse } from '../services/geminiService';
import { supabase } from '../lib/supabase';

const Confessions: React.FC = () => {
    const [confession, setConfession] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [wallOfSins, setWallOfSins] = useState<any[]>([]);

    const fetchSins = async () => {
        if (!supabase) {
            console.warn('Supabase not configured; skipping Wall of Sins fetch.');
            return;
        }

        const { data, error } = await supabase
            .from('confessions')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(10);

        if (error) {
            console.error('Error fetching sins:', error);
        } else if (data) {
            setWallOfSins(data);
        }
    };

    useEffect(() => {
        fetchSins();
    }, []);

    const handleConfess = async () => {
        if (!confession.trim()) return;
        setLoading(true);
        const res = await getSteveResponse(confession);
        setResponse(res);

        // Add to Supabase
        if (!supabase) {
            // Fallback to local state if Supabase isn't configured
            setWallOfSins(prev => [{
                id: Date.now(),
                sin: confession,
                penance: res
            }, ...prev].slice(0, 10));
        } else {
            const { error } = await supabase
                .from('confessions')
                .insert([{
                    sin: confession,
                    penance: res
                }]);

            if (error) {
                console.error('Error saving confession:', error);
                // Fallback to local state if Supabase fails
                setWallOfSins(prev => [{
                    id: Date.now(),
                    sin: confession,
                    penance: res
                }, ...prev].slice(0, 10));
            } else {
                fetchSins(); // Refresh from DB
            }
        }

        setLoading(false);
    };

    return (
        <div className="pt-24 min-h-screen bg-stone-50">
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <span className="material-symbols-outlined text-[20rem] absolute -top-20 -right-20 rotate-12">campaign</span>
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tighter mb-6">The Digital <br /><span className="text-primary">Confession Booth</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">Unburden your soul to Steve. He won't judge, mostly because he's probably not paying full attention.</p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Confession Form */}
                <section>
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-200">
                        <h2 className="font-display text-3xl uppercase mb-6 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">record_voice_over</span>
                            Shout into the Void
                        </h2>
                        <p className="text-stone-600 mb-8 italic">"Confession is good for the soul, but a nap is better for the eyes." — Steve 4:20</p>

                        <div className="space-y-6">
                            <textarea
                                value={confession}
                                onChange={(e) => setConfession(e.target.value)}
                                placeholder="What's weighing on your vibes? Be honest, Steve already kind of knows."
                                className="w-full bg-stone-50 border-stone-200 rounded-2xl p-6 text-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition h-48 resize-none"
                            />
                            <button
                                onClick={handleConfess}
                                disabled={loading || !confession.trim()}
                                className="w-full bg-primary hover:bg-orange-600 disabled:bg-stone-300 text-white font-display uppercase tracking-widest text-xl py-5 rounded-2xl shadow-lg transition-all transform hover:-translate-y-1"
                            >
                                {loading ? 'Consulting the Oracle...' : 'Seek Steve\'s Approval'}
                            </button>
                        </div>

                        {response && (
                            <div className="mt-12 p-8 bg-orange-50 border-l-8 border-primary rounded-r-2xl animate-fade-in">
                                <h3 className="text-primary font-display text-xl mb-4 uppercase tracking-widest">Steve's Revelation:</h3>
                                <p className="text-stone-800 text-xl italic leading-relaxed">"{response}"</p>
                                <button
                                    onClick={() => { setResponse(""); setConfession(""); }}
                                    className="mt-6 text-sm uppercase tracking-widest text-stone-400 hover:text-primary transition-colors font-bold"
                                >
                                    Clear My Conscience
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Wall of Sins */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-display text-3xl uppercase flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">receipt_long</span>
                            Wall of Low-Stakes Sins
                        </h2>
                        <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Live Feed</span>
                    </div>

                    <div className="space-y-6">
                        {wallOfSins.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:border-primary/30 transition-colors">
                                <p className="text-stone-800 mb-4 font-medium italic">"{item.sin}"</p>
                                <div className="flex items-start gap-3 pt-4 border-t border-stone-50">
                                    <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
                                    <p className="text-sm text-stone-500 leading-relaxed font-light">{item.penance}</p>
                                </div>
                            </div>
                        ))}
                        <p className="text-center text-stone-400 text-sm italic mt-8">Names have been removed to protect the lazy.</p>
                    </div>
                </section>
            </div>

            {/* CTA Section */}
            <section className="py-24 bg-stone-900 text-white text-center mt-12">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="font-display text-4xl mb-8 uppercase tracking-widest">Still Feeling Guilty?</h2>
                    <p className="text-xl mb-12 opacity-80 font-light">Don't. It's a waste of energy that could be spent sitting perfectly still.</p>
                    <a href="#/rituals" className="inline-block border-2 border-white text-white font-display uppercase tracking-widest text-lg px-12 py-4 rounded hover:bg-white hover:text-black transition-all">Go Do a Ritual</a>
                </div>
            </section>
        </div>
    );
};

export default Confessions;
