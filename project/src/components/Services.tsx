import React from 'react';

const services = [
  {
    title: 'Acupuntura',
    description: 'Técnica milenar chinesa que promove equilíbrio e bem-estar através de agulhas específicas. Disponível presencialmente e com orientação online.'
  },
  {
    title: 'Acupuntura sem Agulha',
    description: 'Uma alternativa não invasiva que oferece os benefícios da acupuntura tradicional. Ideal para consultas online e presenciais.'
  },
  {
    title: 'Quick Massages',
    description: 'Massagens rápidas e eficientes para aliviar o estresse do dia a dia. Aprenda técnicas de automassagem em nossas consultas online.'
  },
  {
    title: 'Tameana',
    description: 'Terapia energética que promove equilíbrio físico e emocional. Sessões disponíveis presencialmente e à distância.'
  },
  {
    title: 'Pedras Quentes',
    description: 'Massagem relaxante com pedras aquecidas que proporcionam bem-estar profundo. Atendimento exclusivamente presencial.'
  },
  {
    title: 'Barra de Access',
    description: 'Técnica que trabalha pontos específicos da cabeça para liberar tensões e limitações. Disponível presencialmente e com orientação online.'
  },
  {
    title: 'Laser Terapia',
    description: 'Tratamento com laser de baixa intensidade para diversos benefícios terapêuticos. Atendimento presencial com acompanhamento online.'
  }
];

const Services = () => {
  return (
    <section id="serviços" className="py-20 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-gold text-center mb-6">Nossos Serviços</h2>
        <p className="text-center text-gray-300 mb-12">Atendimento presencial e consultas online disponíveis para sua conveniência</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-black/40 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-serif text-gold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <a
                href={`https://wa.me/5519996083494?text=Olá! Gostaria de saber mais sobre ${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-gold hover:text-gold/80 transition-colors duration-200"
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;