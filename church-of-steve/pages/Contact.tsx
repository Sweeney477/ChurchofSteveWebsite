
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24 min-h-screen bg-[#111] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-4 py-20 w-full">
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
          <div className="w-full md:w-1/3 bg-primary p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="font-display text-5xl uppercase tracking-tighter leading-none mb-6">Reach <br/>Out.</h2>
              <p className="opacity-80 font-light leading-relaxed">
                Steve is currently unresponsive, but his inbox isn't. Send your thoughts, complaints, or pizza coupons here.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined">alternate_email</span>
                <span className="font-display tracking-widest text-sm">VOID@CHURCHOFSTEVE.COM</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined">near_me</span>
                <span className="font-display tracking-widest text-sm">FLOATING IN THE GULF STREAM</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-12 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center animate-fade-in">
                <span className="material-symbols-outlined text-8xl text-primary mb-6">done_all</span>
                <h3 className="font-display text-4xl text-gray-900 uppercase mb-4 tracking-tight">Message Transmitted</h3>
                <p className="text-gray-500">Your signal has been sent to the void. Steve will reply if the vibes are right. Don't hold your breath.</p>
                <button onClick={() => setSubmitted(false)} className="mt-10 text-primary font-bold uppercase tracking-widest text-xs hover:underline transition-all">Send Another (If you must)</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Earth Name</label>
                    <input type="text" placeholder="John Doe" className="w-full border-b border-gray-200 py-3 px-0 focus:border-primary outline-none transition-colors text-lg" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Vibe Check Level</label>
                    <select className="w-full border-b border-gray-200 py-3 px-0 focus:border-primary outline-none transition-colors text-lg appearance-none">
                      <option>Super Chill</option>
                      <option>Mildly Anxious</option>
                      <option>In Need of a Taco</option>
                      <option>Seeking Steve</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">The Message</label>
                  <textarea placeholder="Tell Steve everything, or nothing at all." className="w-full border-b border-gray-200 py-3 px-0 focus:border-primary outline-none transition-colors text-lg h-32 resize-none" required></textarea>
                </div>
                <button type="submit" className="bg-gray-900 text-white font-display uppercase tracking-widest text-lg px-12 py-5 rounded-xl hover:bg-primary transition-all shadow-xl flex items-center gap-4 group">
                  Blast it Away
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
