import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import SocialProof from './components/SocialProof';
import Location from './components/Location';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <SocialProof />
        <Location />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;