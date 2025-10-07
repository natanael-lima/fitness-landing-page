"use client";

import { useState } from "react";
import { FaClock, FaUserFriends, FaUserTie } from "react-icons/fa";

interface FitnessCardProps {
  card: {
    id: number;
    title: string;
    description: string;
    image: string;
    duration: string;
    capacity: string;
    instructor: string;
    focus: string[];
    schedule: {
      day: string;
      time: string;
      level: string;
    }[];
  };
}


export const FitnessCard = ({ card }: FitnessCardProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
     <div className="relative w-full max-w-md mx-auto h-96 rounded-xl overflow-hidden shadow-lg ">
        {/* Imagen de fondo */}
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover "
        />
        {/* Overlay*/}
        <div className="absolute inset-0 bg-lime-900/50  transition-all duration-300 rounded-xl "></div>

        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold text-white bg-black/50">
          Coach {card.instructor}
        </div>

        {/* Contenido*/}
        <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white text-center">
          <h3 className=" text-3xl font-bold mb-2">{card.title}</h3>
          <p className="text-gray-200 text-sm mb-4">{card.description}</p>
          <button
            onClick={() => setOpenModal(true)}
            className="font-medium rounded-lg bg-lime-400 text-black hover:bg-lime-300  inline-flex items-center justify-center px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
          >
            Ver más
          </button>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
          <div className="bg-neutral-950/99 rounded-2xl p-6 max-w-md w-full text-white relative shadow-2xl border border-stone-800">
            {/* Botón cerrar */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-lime-300 hover:text-lime-200 text-xl font-bold"
            >
              ×
            </button>
            {/* Título */}
            <h2 className="text-2xl font-bold mb-2 text-lime-300">{card.title}</h2>

            {/* Datos principales */}
            <div className="grid grid-cols-1 gap-2 mb-5 text-sm">
              <div className="flex items-center gap-2">
                <FaClock className="text-lime-300" />
                <span>Duración: {card.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserFriends className="text-lime-300" />
                <span>Capacidad: {card.capacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserTie className="text-lime-300" />
                <span>Instructor: {card.instructor}</span>
              </div>
            </div>
            {/* Foco / beneficios */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold mb-2 text-lime-200">Enfocado en:</h3>
              <div className="flex flex-wrap gap-2">
                {card.focus.map((item, i) => (
                  <span
                    key={i}
                    className="bg-lime-300/10 text-lime-200 text-xs px-3 py-1 rounded-full border border-lime-300/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {/* Horarios */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-lime-200">Horarios:</h3>
              <ul className="space-y-1 text-sm">
                {card.schedule.map((session, index) => (
                  <li
                    key={index}
                    className="flex justify-between border-b border-lime-200/30 pb-1"
                  >
                    <span className="text-stone-300">{session.day}</span>
                    <span className="text-stone-400">{session.time}</span>
                    <span className="text-lime-300 text-xs font-medium">
                      {session.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      )}
    </>
  );
};
