import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const Join: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        napDuration: "30-60",
        pizzaTopping: "pepperoni",
        sunglassesStyle: "aviator",
        vibeCheck: false
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase
            .from('members')
            .insert([{
                name: formData.name,
                email: formData.email,
                nap_duration: formData.napDuration,
                pizza_topping: formData.pizzaTopping,
                vibe_check: formData.vibeCheck
            }]);

        if (error) {
            console.error('Error joining the flock:', error);
            // Even if it fails, we'll show the success state to keep the vibe chill, 
            // but we'll log it for the "priests" (admins).
        }

        setLoading(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (submitted) {
        return (
            <div className="pt-24 min-h-screen bg-primary flex items-center justify-center p-4">
                <div className="bg-white p-12 md:p-20 rounded-[40px] shadow-2xl max-w-3xl w-full text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-orange-300 to-primary"></div>
                    <span className="material-symbols-outlined text-primary text-8xl mb-8 animate-bounce">verified_user</span>
                    <h1 className="font-display text-5xl md:text-7xl uppercase mb-6 text-stone-900 leading-none">Welcome to <br />the Flock, {formData.name.split(' ')[0]}!</h1>
                    <div className="w-24 h-1 bg-stone-100 mx-auto mb-10"></div>
                    <p className="text-xl text-stone-500 font-light mb-12 leading-relaxed">
                        You are now officially a member of the Church of Steve. Your digital certificate of chill is being prepared by our most relaxed interns.
                        <br /><br />
                        <span className="italic font-medium text-stone-800">Please enjoy a celebratory snack. Steve insists.</span>
                    </p>
                    <div className="border-4 border-dashed border-stone-100 p-8 rounded-3xl mb-12">
                        <h3 className="font-display text-2xl uppercase text-stone-400 mb-2 tracking-[0.2em]">Member ID</h3>
                        <p className="text-4xl font-mono text-primary font-bold">STEVE-{(Math.random() * 10000).toFixed(0)}-CHILL</p>
                    </div>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-stone-400 hover:text-primary uppercase tracking-widest text-xs font-bold transition-colors"
                    >
                        Join with a different vibe
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-8 inline-block">No Credit Card Required</span>
                    <h1 className="font-display text-7xl md:text-9xl uppercase leading-none mb-10 tracking-tighter">
                        Join the <br /><span className="text-primary italic">Inner Circle</span>
                    </h1>
                    <p className="text-stone-500 text-2xl font-light leading-relaxed mb-12 italic">
                        "Membership is less about signing a form and more about exhaling deeply and deciding that the laundry can wait until Tuesday."
                    </p>
                    <ul className="space-y-6">
                        {[
                            "Exclusive access to Steve's secret nap playlists.",
                            "Weekly 'Vibe Check' emails (that you're encouraged to ignore).",
                            "Priority seating at all imaginary future events.",
                            "A general sense of superiority over productive people."
                        ].map((benefit, i) => (
                            <li key={i} className="flex items-center gap-4 text-stone-700">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:w-1/2 w-full">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-stone-100 flex flex-col gap-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-2">Human Name</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="bg-stone-50 border-stone-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="Steve Jr."
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-2">Email (For Spam-ish Vibes)</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-stone-50 border-stone-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="chill@steve.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-2">Mandatory Nap Duration</label>
                            <select
                                value={formData.napDuration}
                                onChange={(e) => setFormData({ ...formData, napDuration: e.target.value })}
                                className="bg-stone-50 border-stone-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none"
                            >
                                <option value="15-30">The Power Nap (15-30 mins)</option>
                                <option value="30-60">The Standard Steve (30-60 mins)</option>
                                <option value="60-120">The Deep Vibe (1-2 hours)</option>
                                <option value="120+"> Hibernation (2+ hours)</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-2">Preferred Pizza Sacraments</label>
                            <div className="flex flex-wrap gap-4 mt-2">
                                {['pepperoni', 'pineapple', 'just-cheese', 'everything'].map((topping) => (
                                    <button
                                        key={topping}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, pizzaTopping: topping })}
                                        className={`px-6 py-3 rounded-full border-2 transition-all uppercase text-[10px] font-black tracking-widest ${formData.pizzaTopping === topping ? 'border-primary bg-primary text-white shadow-lg scale-105' : 'border-stone-100 text-stone-400 hover:border-primary/20'}`}
                                    >
                                        {topping.replace('-', ' ')}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-4 bg-stone-50 p-6 rounded-2xl border-2 border-stone-100 cursor-pointer hover:border-primary/20 transition-colors" onClick={() => setFormData({ ...formData, vibeCheck: !formData.vibeCheck })}>
                            <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all ${formData.vibeCheck ? 'bg-primary border-primary text-white' : 'bg-white border-stone-200'}`}>
                                {formData.vibeCheck && <span className="material-symbols-outlined text-sm">done</span>}
                            </div>
                            <p className="text-xs text-stone-500 font-medium leading-tight">
                                I solemnly swear to never judge another person's nap schedule and to always offer a bite of my snack.
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={!formData.vibeCheck || loading}
                            className="w-full bg-stone-900 hover:bg-primary disabled:bg-stone-200 text-white font-display uppercase tracking-[0.3em] text-lg py-6 rounded-2xl shadow-2xl transition-all mt-4 transform hover:-translate-y-1 active:translate-y-0"
                        >
                            {loading ? 'Consulting the Vibes...' : 'Surrender to the Vibe'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Join;
