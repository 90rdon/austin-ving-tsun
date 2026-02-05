import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Lineage from "./components/Lineage";
import Modules from "./components/Modules";
import Network from "./components/Network";
import PricingCTA from "./components/PricingCTA";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-heritage-light text-heritage-dark font-sans overflow-x-hidden antialiased selection:bg-heritage-green selection:text-white bg-paper-texture flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Lineage />
        <Modules />
        <Network />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;