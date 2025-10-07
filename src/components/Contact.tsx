import React from 'react';
import { FaMapMarkerAlt, FaPaperPlane, FaEnvelope, FaMailBulk, FaPhone } from 'react-icons/fa';

export default function LocationSubscription() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert('¡Gracias por suscribirte! Te enviaremos nuestras promociones.');
};

  return (
   <section id='contact' className="ww-full mx-auto py-20 text-white relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-between">
    <div className="w-full md:max-w-[80%] mx-auto px-4 sm:px-2 lg:px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-lime-300">CONTACTO</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Contacte ahora con nosotros y comienza un nuevo desafio.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 📨 Columna 1: Suscripción */}
        <div className=" p-8 rounded-2xl shadow-lg ">
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

        {/* Columna 2: Mapa */}
        <div className="h-full bg-lime-100/5 border border-lime-300/10 p-8 rounded-2xl backdrop-blur-md">
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

        <div className="mt-6">
            {/* Fila con iconos */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-300">
              <p className="flex items-center">
                <FaMapMarkerAlt className="text-lime-300 mr-2" />
                Av. Fitness 1234, Jujuy, Argentina
              </p>
              <p className="flex items-center">
                <FaMailBulk className="text-lime-300 mr-2" />
                info@florfit.com.ar
              </p>
              <p className="flex items-center">
                <FaPhone className="text-lime-300 mr-2" />
                3881231233
              </p>
            </div>

            {/* Fila con días */}
            <p className="text-lime-100/70 mt-3">
              Abierto de Lunes a Viernes: 6:00 - 23:00 | Sábados: 8:00 - 20:00
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}