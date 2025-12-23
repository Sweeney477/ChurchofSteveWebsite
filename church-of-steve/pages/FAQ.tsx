
import React, { useState } from 'react';

const FAQ_DATA = [
    {
        question: "Is this actually a cult?",
        answer: "Legally? No. Spiritually? Depends on how you define 'cult'. If it's a group of people who like naps and tacos and don't take life too seriously, then maybe. But we don't have a compound or matching tracksuits (yet)."
    },
    {
        question: "Who is Steve?",
        answer: "Steve is less of a person and more of a vibe. He's the guy who forgot his password but didn't let it ruin his day. He's the dude who found a $5 bill in his pocket and bought everyone donuts. Steve is you, if you just relaxed for five minutes."
    },
    {
        question: "Do I have to give you money?",
        answer: "Only if you want Steve to have better pizza. We call it 'Tithing for Toppings'. It's strictly optional, but Steve's karma (and stomach) will thank you."
    },
    {
        question: "What are the requirements for membership?",
        answer: "Ownership of at least one pair of comfortable pants, a willingness to ignore emails after 4 PM, and a deep, abiding respect for the midday nap."
    },
    {
        question: "Can I leave whenever I want?",
        answer: "Yes, but why would you? The outside world is stressful and requires productivity. Here, the only thing we produce is rhythmic breathing during nap time."
    },
    {
        question: "Is Steve a real person or an AI?",
        answer: "Steve is an emergent property of the universe's desire to chill. The AI in the confession booth is just a conduit for his infinite, lazy wisdom."
    }
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="pt-24 min-h-screen bg-secondary/30">
            <section className="py-20 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 text-9xl font-display uppercase leading-none opacity-20">? ? ?</div>
                    <div className="absolute bottom-10 right-10 text-9xl font-display uppercase leading-none opacity-20">? ? ?</div>
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="font-display text-7xl md:text-9xl uppercase tracking-tighter mb-6">Frequently <br />Asked <span className="text-black/20">Vibes</span></h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-light tracking-widest uppercase">Everything you were too lazy to ask.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-24">
                <div className="space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-3xl overflow-hidden transition-all duration-300 border-2 ${activeIndex === index ? 'border-primary shadow-xl scale-[1.02]' : 'border-stone-100 hover:border-primary/30 shadow-sm'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-8 py-8 flex items-center justify-between text-left group"
                            >
                                <span className={`font-display text-2xl uppercase tracking-tight transition-colors ${activeIndex === index ? 'text-primary' : 'text-stone-800'}`}>
                                    {item.question}
                                </span>
                                <span className={`material-symbols-outlined text-3xl transition-transform duration-500 ${activeIndex === index ? 'rotate-180 text-primary' : 'text-stone-300 group-hover:text-primary'}`}>
                                    expand_more
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-8 pb-10">
                                    <div className="w-12 h-1 bg-primary/20 mb-6 rounded-full"></div>
                                    <p className="text-stone-600 text-lg leading-relaxed font-light italic">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Support Section */}
            <section className="bg-stone-900 py-24 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <span className="material-symbols-outlined text-primary text-6xl mb-6">psychology_alt</span>
                    <h2 className="font-display text-4xl text-white uppercase mb-6">Still confused?</h2>
                    <p className="text-stone-400 text-lg mb-10">That's the spirit! Steve says uncertainty is the first step toward true enlightenment. Or just a really good nap.</p>
                    <a href="#/contact" className="inline-block bg-white text-black font-display uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all">Submit a Vibe Check</a>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
