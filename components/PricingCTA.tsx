import React from 'react';

const PricingCTA: React.FC = () => {
  return (
    <section className="relative bg-heritage-green py-24 overflow-hidden">
      <div className="grain-overlay opacity-10"></div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-8 flex justify-center">
          <div className="h-14 w-14 border border-heritage-ochre/30 bg-heritage-green flex items-center justify-center rounded-sm shadow-lg">
            <span className="material-symbols-outlined text-heritage-ochre text-3xl">emoji_events</span>
          </div>
        </div>
        <h2 className="text-5xl lg:text-6xl font-serif text-heritage-light mb-6">Ready to compile your skills?</h2>
        <p className="text-heritage-light/70 text-lg mb-12 font-light max-w-2xl mx-auto font-sans">
          Join the new batch. Limited slots available for the upcoming intro course cycle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="flex items-center justify-center rounded-sm bg-heritage-ochre px-10 py-5 text-lg font-bold uppercase tracking-wider text-heritage-green transition-all hover:bg-[#C28E4D] hover:shadow-xl hover:-translate-y-1">
            Start Intro Course - $49.95
          </button>
        </div>
        <div className="mt-12 flex justify-center gap-8 text-heritage-light/40 text-sm font-mono">
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">verified_user</span> Secure Checkout</span>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">restart_alt</span> 30-Day Guarantee</span>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;