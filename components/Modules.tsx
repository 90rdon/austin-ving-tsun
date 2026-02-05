import React from 'react';

const Modules: React.FC = () => {
  const modules = [
    {
      id: "MOD.01",
      title: "Siu Nim Tao",
      subtitle: "\"Little Idea\". The kernel. Defines the coordinate system and structure variables.",
      points: ["Centerline Theory", "Stance Structure"],
      icon: "architecture",
      bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0TQ4aulnBLOR80hTviTuF1rR2-gHaNGNrlkR40p4D9NJZ5QF6o2wgxeIaMa09x9kSYNHK0YFY1sAp5fMwgIKGxNtUXW4kJ5OcXAKyIC2jMFEA77auQ8Hbt453tRuTHBvBlmeSSnwyLzhTnHz1qY5RNdTf9AHWRDCkST0jdBk9FONBNZ75bh6bLrfxHP8VQGQ2LLRyy9XHO_Zfw_2zLqr-OdUdjalXd_8V52uUnvdlPUzOsey9wPm8N9i5t_uXcnSD_PDGT77QtfV",
      filter: "invert(1) hue-rotate(180deg)",
      iconColor: "text-heritage-green"
    },
    {
      id: "MOD.02",
      title: "Chum Kiu",
      subtitle: "\"Seeking the Bridge\". Motion & Mobility. Synchronizing upper and lower body arrays.",
      points: ["Dynamic Footwork", "Multi-vector Force"],
      icon: "sync_alt",
      bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTc7eQCAJy9bWTTZSsIqOeT8_lDFLapltSyOlv89C911OPY0ppiuENeNctT4Zwy1nzmlfRkyMM79C_fkl0pZI6pqmshZgmP6CTcEKiXSVEstQsn8uB1q95RRqSAXtIptVo8tNqmevGkkpl4MH3c-_mEhsfiasqObBT7_FkzbYP95txeQCq8PZ6-9aeeefZRVnlTxzyvLPz7xU-t0nFXcVFScUI1YtRn_2Vun7UdQm9cY9CkRYBKTj3-hYWPudLC2b_2m722fSeb8Y8",
      filter: "none",
      mixBlend: "luminosity",
      iconColor: "text-heritage-green"
    },
    {
      id: "MOD.03",
      title: "Biu Jee",
      subtitle: "\"Thrusting Fingers\". Exception Handling. Recovery from compromised positions.",
      points: ["Emergency Protocols", "Flow State"],
      icon: "lock",
      bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXTUFsFTlZua1QwMGfZgRqD2E0JB4GZvQVDga-G1u6ta3GIadAsJP0F5OjUM-LhPNqNzBEZQdE4Hd24hRRRVshTcWItBqXo7568IAh7G9vQis3O7TMC1pf_XyLatjvTtpjBtrAcsexT--yTImwnMFoYf3IE5sIG9OI0ZiGlDps11dvI1M-BulbrkM0ZCLcdMoGQ5tN_XVVeQ9VQqYklDsHIDNtOH2pQqOqSoBN7rJewp-oRs49LVj2sQr7hWSwdJbN5ZloMCD7x9e8",
      filter: "contrast(1.2) sepia(0.5)",
      iconColor: "text-heritage-ochre"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#2C4C3B] to-[#3D5E4D] py-24 overflow-hidden border-t border-heritage-ochre">
      <div className="grain-overlay opacity-10"></div>
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#D69E59 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl font-serif text-heritage-ochre mb-2">System Modules</h2>
            <p className="text-heritage-light/70 font-serif italic text-xl">A structured stack for full-body integration.</p>
          </div>
          <div className="hidden md:block">
            <div className="px-4 py-1 border border-heritage-light/30 rounded-full bg-heritage-green/50 backdrop-blur-sm">
              <span className="text-xs font-mono text-heritage-light tracking-widest uppercase">Full Stack Training</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-heritage-light rounded-sm p-4 shadow-xl border border-heritage-ochre/20 hover:border-heritage-ochre transition-all duration-300 group">
              <div className="relative aspect-video w-full bg-heritage-dark mb-6 overflow-hidden border border-heritage-gray/10">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  style={{ 
                    backgroundImage: `url("${mod.bg}")`,
                    filter: mod.filter,
                    mixBlendMode: mod.mixBlend as any
                  }}
                />
                <div className="absolute top-3 right-3 bg-heritage-light rounded-full p-1 shadow-md z-10">
                  <span className={`material-symbols-outlined ${mod.iconColor} text-sm`}>{mod.icon}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-heritage-ochre uppercase tracking-widest">{mod.id}</span>
                <h3 className="text-2xl font-serif text-heritage-green">{mod.title}</h3>
                <p className="text-xs text-heritage-gray font-mono leading-relaxed border-l-2 border-heritage-ochre/50 pl-3">{mod.subtitle}</p>
                <ul className="space-y-2 pt-2">
                  {mod.points.map((pt, i) => (
                    <li key={i} className="flex items-center text-xs text-heritage-dark font-medium font-sans">
                      <span className="material-symbols-outlined text-heritage-ochre text-sm mr-2">check</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <a className="inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-widest text-heritage-green hover:text-heritage-ochre mt-2" href="#">
                  Load Module <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;