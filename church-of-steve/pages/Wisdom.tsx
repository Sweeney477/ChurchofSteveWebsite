
import React, { useState, useEffect } from 'react';
import { getSteveResponse } from '../services/geminiService';

const Wisdom: React.FC = () => {
    const [wisdom, setWisdom] = useState("");
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState<string[]>([]);

    const fetchWisdom = async () => {
        setLoading(true);
        const res = await getSteveResponse("Steve, give me a random piece of daily wisdom or a chill revelation.");
        setWisdom(res);
        if (res && !res.includes("napping")) {
            setHistory(prev => [res, ...prev].slice(0, 3));
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchWisdom();
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-black text-white selection:bg-primary selection:text-white">
            {/* Dynamic Background Effect */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] bg-orange-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
                <header className="text-center mb-24">
                    <div className="inline-block px-4 py-1 border border-primary/30 rounded-full text-[10px] uppercase tracking-[0.3em] text-primary mb-6 animate-fade-in">
                        Daily Revelation
                    </div>
                    <h1 className="font-display text-7xl md:text-9xl uppercase leading-none mb-8 tracking-tighter">
                        Steve's <br /><span className="text-primary italic">Wisdom</span>
                    </h1>
                    <p className="text-gray-400 text-xl font-light tracking-wide max-w-2xl mx-auto">
                        Directly from the source (mostly). Steve's thoughts are usually about naps, but occasionally he strikes gold.
                    </p>
                </header>

                {/* Main Wisdom Display */}
                <section className="relative mb-32">
                    <div className="bg-stone-900/50 backdrop-blur-xl border border-white/5 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden group">
                        {loading ? (
                            <div className="py-20 flex flex-col items-center gap-6">
                                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                                <p className="font-display uppercase tracking-widest text-sm text-gray-500">Transmitting Vibe...</p>
                            </div>
                        ) : (
                            <div className="animate-fade-in">
                                <span className="material-symbols-outlined text- primary text-7xl mb-10 opacity-50 block">lightbulb</span>
                                <p className="text-3xl md:text-5xl font-light leading-tight italic text-gray-200 mb-12">
                                    "{wisdom}"
                                </p>
                                <button
                                    onClick={fetchWisdom}
                                    className="bg-primary hover:bg-orange-600 text-white font-display uppercase tracking-[0.2em] text-sm px-12 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(232,119,62,0.3)]"
                                >
                                    Meditate Again
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Previous Revelations */}
                {history.length > 1 && (
                    <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <h3 className="font-display text-2xl uppercase tracking-widest mb-10 text-gray-500 border-b border-white/10 pb-4">Previous Revelations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {history.slice(1).map((h, i) => (
                                <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                                    <p className="text-gray-400 italic text-lg leading-relaxed">"{h}"</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Footer Quote */}
            <div className="py-20 text-center border-t border-white/5 mt-20">
                <p className="text-gray-600 uppercase tracking-[0.5em] text-[10px]">Truth is relative. Naps are absolute.</p>
            </div>
        </div>
    );
};

export default Wisdom;
