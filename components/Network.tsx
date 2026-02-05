import React from 'react';

const Network: React.FC = () => {
  const mapImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuB80Esd1Cqp5LxXLPUWAMrjL7ctKrzPvecc7JDbJM16BGtSKHit-6zaSTYwazZh1LULeBh7EKYVE4GWe3z1JwfX2OwflsIeBllWl2IACNURxO-82J6gX8bdp9T-xzs3HOXtt00xpOHLsbHKloTYA2KNePsI_zTum3vWPIgTOBgmywMz6InS629Rw8AOV9oIJXGz6tMEo-RlN1TgJlJFO_1SgVc_FrZ8utRVpHWtZhyDCYlipHTEpfDNgtBzn4XxmMAJoVYygxsu8MH5";

  return (
    <section className="relative bg-heritage-tan py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-heritage-green/10 px-3 py-1 mb-6 rounded-sm">
              <span className="material-symbols-outlined text-heritage-green text-sm">hub</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-heritage-green">Distributed Network</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-heritage-green mb-6 leading-tight">Training Beyond the Firewall</h2>
            <p className="text-heritage-gray text-lg leading-relaxed mb-8 font-light italic border-l-4 border-heritage-ochre pl-6">
              We don't just train in the dojo. We integrate into Austin's ecosystem. Find us debugging forms at local coffee shops or running drill sets in the park. <span className="text-heritage-green font-medium not-italic">Kung Fu is an operating system for life.</span>
            </p>
            
            <div className="space-y-6">
              <div className="bg-heritage-light p-6 rounded-sm shadow-sm border border-heritage-ochre/20 flex gap-4 items-start hover:shadow-md transition-shadow">
                <div className="h-10 w-10 flex-shrink-0 bg-heritage-green/10 flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-heritage-green">coffee</span>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-heritage-green mb-1">Coffee Shop Meetups</h4>
                  <p className="text-sm text-heritage-gray font-mono">Discussion of concepts over espresso. "Kung Fu Life" theory sessions.</p>
                </div>
              </div>
              <div className="bg-heritage-light p-6 rounded-sm shadow-sm border border-heritage-ochre/20 flex gap-4 items-start hover:shadow-md transition-shadow">
                <div className="h-10 w-10 flex-shrink-0 bg-heritage-green/10 flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-heritage-green">forest</span>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-heritage-green mb-1">Park Chi Sao</h4>
                  <p className="text-sm text-heritage-gray font-mono">Open air sticky hands practice. Connecting with the environment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 h-full min-h-[500px]">
            <div className="absolute inset-0 bg-heritage-green/5 transform rotate-3 rounded-sm z-0"></div>
            <div className="absolute inset-0 z-10 rounded-sm overflow-hidden shadow-2xl border-4 border-heritage-light">
              <div 
                className="h-full w-full bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url("${mapImage}")`,
                  filter: 'sepia(0.2) contrast(1.1)' 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-500"></div>
                </div>
                <span className="text-heritage-light text-xs font-mono tracking-widest">+42 Active Nodes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;