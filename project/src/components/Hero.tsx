import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif text-gold mb-6">
            Bem-vindo ao Seo Lotus Spa
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            Onde o cuidado e o bem-estar são nossa prioridade
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Atendimento presencial e online para sua comodidade
          </p>
          <a
            href="https://wa.me/5519996083494"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gold/90 transition-colors duration-200"
          >
            Agende seu atendimento
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;