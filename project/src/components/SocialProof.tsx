import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Viviane",
    text: "Mais uma vitória.. Sem medos e com sucesso ❤️",
    technique: "Tameana"
  }
];

const SocialProof = () => {
  return (
    <section id="provas-sociais" className="py-20 bg-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-gold text-center mb-12">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-medium text-gold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">Técnica: {testimonial.technique}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;