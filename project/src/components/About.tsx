import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-gold text-center mb-12">Sobre Nós</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              No Seo Lotus Spa, oferecemos uma gama completa de terapias e tratamentos voltados para seu bem-estar físico e emocional. Nossa abordagem única combina técnicas milenares com métodos modernos, disponíveis tanto presencialmente quanto online:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>• <span className="text-gold">Acupuntura tradicional e sem agulhas:</span> Proporcionando equilíbrio energético e alívio de diversos sintomas, com orientações disponíveis também online.</li>
              <li>• <span className="text-gold">Quick Massages:</span> Solução rápida e eficaz para o estresse diário, com técnicas que podem ser aprendidas em consultas online.</li>
              <li>• <span className="text-gold">Tameana:</span> Terapia energética exclusiva para harmonização completa, eficaz tanto presencialmente quanto à distância.</li>
              <li>• <span className="text-gold">Pedras Quentes:</span> Relaxamento profundo e liberação de tensões em sessões presenciais.</li>
              <li>• <span className="text-gold">Barra de Access:</span> Técnica revolucionária para limpar bloqueios mentais e emocionais, com acompanhamento presencial e online.</li>
              <li>• <span className="text-gold">Laser Terapia:</span> Tratamento moderno para diversos fins terapêuticos, com monitoramento contínuo presencial e online.</li>
            </ul>
            <p className="text-lg text-gray-300 mt-6">
              Oferecemos flexibilidade com consultas online para sua comodidade, permitindo que você cuide do seu bem-estar de onde estiver.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Ambiente do Spa"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;