import React from 'react';
import { FaMapMarkerAlt, FaPaperPlane, FaEnvelope } from 'react-icons/fa';

export default function LocationSubscription() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert('¡Gracias por suscribirte! Te enviaremos nuestras promociones.');
};

  return (
   <section className="w-full mx-auto py-16 text-white px-4 relative overflow-hidden">
  <div className="w-full md:max-w-[80%] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* 📨 Columna 1: Suscripción */}
      <div className="bg-lime-400/10 hover:bg-lime-400/15 transition-all border border-lime-300/20 p-8 rounded-2xl shadow-lg shadow-lime-300/10">
        <div className="flex items-center mb-6">
          <div className="bg-lime-400/80 p-3 rounded-full mr-4 shadow-lg shadow-lime-300/20">
            <FaEnvelope className="text-2xl text-black" />
          </div>
          <h2 className="text-3xl font-bold text-lime-300">Suscríbete a nuestro Newsletter</h2>
        </div>
        
        <p className="text-gray-300 mb-8 text-lg">
          Recibe promociones exclusivas, tips de entrenamiento y novedades directamente en tu correo.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Tu email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="tucorreo@ejemplo.com"
              className="w-full bg-zinc-900/60 border border-lime-300/20 rounded-lg py-4 px-6 text-white placeholder-gray-500 focus:ring-2 focus:ring-lime-300 focus:border-transparent transition"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-lime-400 text-black hover:bg-lime-300 py-4 px-6 rounded-lg font-bold transition duration-300 flex items-center justify-center"
          >
            <FaPaperPlane className="mr-3" />
            REGISTRAR EMAIL
          </button>
        </form>
        
        <p className="text-gray-400 text-sm mt-4">
          * Solo enviaremos contenido relevante. Puedes darte de baja en cualquier momento.
        </p>
      </div>

      {/* 📍 Columna 2: Mapa */}
      <div className="h-full bg-lime-100/5 border border-lime-300/10 p-8 rounded-2xl shadow-lg shadow-lime-300/5 backdrop-blur-md">
        <div className="flex items-center mb-6">
          <div className="bg-lime-400/80 p-3 rounded-full mr-4 shadow-lg shadow-lime-300/20">
            <FaMapMarkerAlt className="text-2xl text-black" />
          </div>
          <h2 className="text-3xl font-bold text-lime-300">Nuestra Ubicación</h2>
        </div>

        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden border border-lime-300/20 shadow-lg shadow-lime-300/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889533!2d-58.383759!3d-34.603734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjQiUyA1OMKwMjMnMDEuNSJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            loading="lazy"
            style={{ border: 0 }}
            className="w-full h-full min-h-[400px]"
          ></iframe>
        </div>

        <div className="mt-6 space-y-2">
          <p className="flex items-center text-gray-300">
            <FaMapMarkerAlt className="text-lime-300 mr-3" />
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