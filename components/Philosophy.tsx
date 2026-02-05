import React from 'react';

const Philosophy: React.FC = () => {
  const cards = [
    {
      icon: 'psychology',
      title: 'Mindfulness',
      desc: 'Find stillness in motion. Ving Tsun demands total focus, offering a necessary mental break from code and meetings.'
    },
    {
      icon: 'timer',
      title: 'Efficiency',
      desc: 'Maximum output, minimum effort. We apply the physics of "centerline theory" to combat, much like optimizing an algorithm.'
    },
    {
      icon: 'shield',
      title: 'Application',
      desc: 'Traditional techniques refined for urban self-defense. Practical, direct, and effective for the South Austin environment.'
    }
  ];

  return (
    <section className="relative bg-heritage-light py-32">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/5 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-heritage-green/60 block mb-4">The Practice</span>
          <h2 className="text-5xl font-serif text-heritage-green mb-6">The Kung Fu Life</h2>
          <div className="w-24 h-1 bg-heritage-ochre mx-auto mb-6"></div>
          <p className="text-xl text-heritage-gray max-w-2xl mx-auto font-light leading-relaxed">
            Unlock efficiency and mindfulness through the Ving Tsun system. A physical reset from the digital grind.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {cards.map((card, idx) => (
            <div key={idx} className="group relative bg-[#FDFBF7] p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-[#EBE5D5] hover:border-heritage-green transition-all duration-300">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-heritage-green text-heritage-light shadow-lg">
                <span className="material-symbols-outlined text-3xl">{card.icon}</span>
              </div>
              <h3 className="mb-4 text-2xl font-serif text-heritage-green">{card.title}</h3>
              <p className="text-heritage-gray leading-relaxed">{card.desc}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-heritage-ochre scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;