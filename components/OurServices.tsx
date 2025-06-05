import React, { useState } from 'react';
import { FaHeartbeat, FaUserFriends, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiWeightLiftingUp, GiBoxingGlove, GiMeditation, GiWeight, GiJumpingRope, GiMuscleUp } from 'react-icons/gi';
import { MdPool, MdSpa } from 'react-icons/md';

export default function OurServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    {
      title: "Musculación",
      description: "Área premium con equipos de última generación",
      icon: <GiWeightLiftingUp className="text-4xl" />,
      image: "https://media.istockphoto.com/id/2075354173/es/foto/una-pareja-de-fitness-est%C3%A1-haciendo-kettlebell-twist-en-un-gimnasio-juntos.jpg?s=612x612&w=0&k=20&c=hptIYXejVvbO3Z1agU2YoZofeBPLCCI9mi_3V82zbWE="
    },
    {
      title: "CrossFit",
      description: "Entrenamiento funcional de alta intensidad",
      icon: <GiJumpingRope className="text-4xl" />,
      image: "https://media.istockphoto.com/id/2075354173/es/foto/una-pareja-de-fitness-est%C3%A1-haciendo-kettlebell-twist-en-un-gimnasio-juntos.jpg?s=612x612&w=0&k=20&c=hptIYXejVvbO3Z1agU2YoZofeBPLCCI9mi_3V82zbWE="
    },
    {
      title: "Boxeo",
      description: "Clases técnicas y entrenamiento cardiovascular",
      icon: <GiBoxingGlove className="text-4xl" />,
      image: "https://media.istockphoto.com/id/2075354173/es/foto/una-pareja-de-fitness-est%C3%A1-haciendo-kettlebell-twist-en-un-gimnasio-juntos.jpg?s=612x612&w=0&k=20&c=hptIYXejVvbO3Z1agU2YoZofeBPLCCI9mi_3V82zbWE="
    },
    {
      title: "Yoga",
      description: "Armonía entre cuerpo y mente",
      icon: <GiMeditation className="text-4xl" />,
      image: "https://media.istockphoto.com/id/2075354173/es/foto/una-pareja-de-fitness-est%C3%A1-haciendo-kettlebell-twist-en-un-gimnasio-juntos.jpg?s=612x612&w=0&k=20&c=hptIYXejVvbO3Z1agU2YoZofeBPLCCI9mi_3V82zbWE="
    },
    {
      title: "Powerlifting",
      description: "Especializado en las tres grandes elevaciones",
      icon: <GiWeight className="text-4xl" />,
      image: "https://media.istockphoto.com/id/2075354173/es/foto/una-pareja-de-fitness-est%C3%A1-haciendo-kettlebell-twist-en-un-gimnasio-juntos.jpg?s=612x612&w=0&k=20&c=hptIYXejVvbO3Z1agU2YoZofeBPLCCI9mi_3V82zbWE="
    },
    {
      title: "Calistenia",
      description: "Dominio del peso corporal",
      icon: <GiMuscleUp className="text-4xl" />,
      image: "https://media.istockphoto.com/id/2075354173/es/foto/una-pareja-de-fitness-est%C3%A1-haciendo-kettlebell-twist-en-un-gimnasio-juntos.jpg?s=612x612&w=0&k=20&c=hptIYXejVvbO3Z1agU2YoZofeBPLCCI9mi_3V82zbWE="
    },
    {
      title: "Natación",
      description: "Clases para todos los niveles",
      icon: <MdPool className="text-4xl" />,
      image: "https://media.istockphoto.com/id/2075354173/es/foto/una-pareja-de-fitness-est%C3%A1-haciendo-kettlebell-twist-en-un-gimnasio-juntos.jpg?s=612x612&w=0&k=20&c=hptIYXejVvbO3Z1agU2YoZofeBPLCCI9mi_3V82zbWE="
    },
    {
      title: "Nutrición",
      description: "Planes personalizados por expertos",
      icon: <FaHeartbeat className="text-4xl" />,
      image: "https://media.istockphoto.com/id/2075354173/es/foto/una-pareja-de-fitness-est%C3%A1-haciendo-kettlebell-twist-en-un-gimnasio-juntos.jpg?s=612x612&w=0&k=20&c=hptIYXejVvbO3Z1agU2YoZofeBPLCCI9mi_3V82zbWE="
    },
    {
      title: "Recuperación",
      description: "Terapias y masajes especializados",
      icon: <MdSpa className="text-4xl" />,
      iimage: "https://media.istockphoto.com/id/2075354173/es/foto/una-pareja-de-fitness-est%C3%A1-haciendo-kettlebell-twist-en-un-gimnasio-juntos.jpg?s=612x612&w=0&k=20&c=hptIYXejVvbO3Z1agU2YoZofeBPLCCI9mi_3V82zbWE="
    },
    {
      title: "Personal Trainer",
      description: "Entrenamiento 100% personalizado",
      icon: <FaUserFriends className="text-4xl" />,
      image: "https://media.istockphoto.com/id/2075354173/es/foto/una-pareja-de-fitness-est%C3%A1-haciendo-kettlebell-twist-en-un-gimnasio-juntos.jpg?s=612x612&w=0&k=20&c=hptIYXejVvbO3Z1agU2YoZofeBPLCCI9mi_3V82zbWE="
    }
  ];

  const visibleServices = services.slice(currentIndex, currentIndex + 4);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 4 >= services.length ? 0 : prevIndex + 4
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 4 < 0 ? services.length - (services.length % 4 || 4) : prevIndex - 4
    );
  };

  return (
    <section className="w-[98%] mx-auto h-[100vh] flex flex-col md:flex-row items-center justify-between 
                         text-white p-8 relative overflow-hidden 
                        rounded-3xl ">
      <div className="max-w-7xl mx-auto">
        {/* Header con título, texto y botones en línea */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-6xl font-bold mb-2">NUESTROS SERVICIOS</h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Todo lo que necesitas para transformar tu cuerpo y mente
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-zinc-700 hover:bg-red-600 transition"
              aria-label="Anterior"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-zinc-700 hover:bg-red-600 transition"
              aria-label="Siguiente"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Grid Bento con efecto carrusel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleServices.map((service, index) => (
            <div 
              key={index} 
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Imagen de fondo con overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Contenido */}
              <div className="absolute bottom-0 left-0 z-20 p-6 w-full">
                <div className="text-red-500 mb-2">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
              
              {/* Botón flotante */}
              <button className="absolute right-4 top-4 z-20 bg-red-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <FaChevronRight />
              </button>
            </div>
          ))}
        </div>

        {/* Indicadores de paginación */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(services.length / 4) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * 4)}
              className={`h-2 w-6 rounded-full ${currentIndex === i * 4 ? 'bg-red-600' : 'bg-zinc-700'}`}
              aria-label={`Ir a página ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}