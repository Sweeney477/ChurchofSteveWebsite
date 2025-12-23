
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1a150c] border-t border-stone-800 relative">
      <div className="w-full h-1 bg-primary"></div>
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">church</span>
              <h3 className="text-2xl font-bold text-white tracking-tight font-display uppercase">Church of Steve</h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Salvation, now with 50% less guilt. We believe in good vibes, better pizza, and the healing power of ignoring your problems until they go away.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">Unhelpful Links</h4>
              <nav className="flex flex-col gap-2">
                <a className="text-stone-400 hover:text-primary transition-colors text-sm" href="#/donate">Steve's Pizza Fund</a>
                <a className="text-stone-400 hover:text-primary transition-colors text-sm" href="#/beliefs">Questionable Beliefs</a>
                <a className="text-stone-400 hover:text-primary transition-colors text-sm" href="#/faq">Vibe FAQ</a>
                <a className="text-stone-400 hover:text-primary transition-colors text-sm" href="#/join">Join the Flock</a>
                <a className="text-stone-400 hover:text-primary transition-colors text-sm" href="#/contact">Complaint Dept (Disabled)</a>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">Stalk Steve</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">photo_camera</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">tag</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-stone-800 my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4 text-xs text-stone-500">
          <p>© 2024 Church of Steve. All Rights Reserved. (Probably.)</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms of Service?</a>
            <a href="#" className="hover:text-white">Privacy (Lol)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
