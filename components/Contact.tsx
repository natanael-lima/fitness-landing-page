import React from 'react';
import { FaMapMarkerAlt, FaPaperPlane, FaEnvelope } from 'react-icons/fa';

export default function LocationSubscription() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert('¡Gracias por suscribirte! Te enviaremos nuestras promociones.');
};

  return (
    <section className="w-full mx-auto py-16 bg-zinc-900 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna 1: Suscripción por email */}
          <div className="bg-zinc-800 p-8 rounded-2xl shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <FaEnvelope className="text-2xl" />
              </div>
              <h2 className="text-3xl font-bold">Suscríbete a nuestro Newsletter</h2>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg">
              Recibe promociones exclusivas, tips de entrenamiento y novedades directamente en tu email.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Tu email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-lg py-4 px-6 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-bold transition duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-3" />
                REGISTRAR EMAIL
              </button>
            </form>
            
            <p className="text-gray-400 text-sm mt-4">
              * Solo enviaremos contenido relevante. Puedes darte de baja cuando quieras.
            </p>
          </div>

          {/* Columna 2: Mapa de ubicación */}
          <div className="h-full">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <h2 className="text-3xl font-bold">Nuestra Ubicación</h2>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl border-2 border-zinc-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889533!2d-58.383759!3d-34.603734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjQiUyA1OMKwMjMnMDEuNSJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
              
                loading="lazy"
                className="w-full h-full min-h-[400px]"
              ></iframe>
            </div>
            
            <div className="mt-6 space-y-2">
              <p className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="text-red-500 mr-3" />
                Av. Fitness 1234, Buenos Aires, Argentina
              </p>
              <p className="text-gray-400">
                Abierto de Lunes a Viernes: 6:00 - 23:00 | Sábados: 8:00 - 20:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}