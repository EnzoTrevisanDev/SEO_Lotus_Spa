import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';

const Location = () => {
  return (
    <section id="localização" className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-gold text-center mb-12">Nossa Localização</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif text-gold mb-2">Endereço</h3>
                <p className="text-gray-300">
                  R. Benedito Rossi, 22 - Parque São Quirino<br />
                  Campinas - SP, 13088-210
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif text-gold mb-2">Contato</h3>
                <p className="text-gray-300">
                  <a href="tel:+5519996083494" className="hover:text-gold transition-colors duration-200">
                    (19) 99608-3494
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Instagram className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif text-gold mb-2">Instagram</h3>
                <p className="text-gray-300">
                  <a 
                    href="https://www.instagram.com/seolotusspa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors duration-200"
                  >
                    @seolotusspa
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.323292090971!2d-47.040776823751436!3d-22.8645128363634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c595455266bf%3A0x5003a323d06e7e44!2sR.%20Benedito%20Rossi%2C%2022%20-%20Parque%20S%C3%A3o%20Quirino%2C%20Campinas%20-%20SP%2C%2013088-210!5e0!3m2!1sen!2sbr!4v1743569093499!5m2!1sen!2sbr" 
    width="100%" 
    height="100%" 
    style={{border: 0}} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        </div>
      </div>
    </section>
  );
};

export default Location;