"use client";

import { useState, useEffect } from "react";
import { FitnessCard } from "./UI/FitnessCard";
import { ControlsClass } from "./UI/ControlsClass";
import { fitnessClasses } from "../lib/data";

export default function FitnessClass() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 4;
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 4;
  };

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, fitnessClasses.length - cardsPerView);

  const nextSlide = () => setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  const prevSlide = () => setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);

  return (
    <section id="class" className="w-full mx-auto py-20 text-white relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-between">
      <div className="mx-auto w-full md:max-w-[80%] px-4 sm:px-2 lg:px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-lime-300">NUESTRAS CLASES</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Diseñados para transformar tu cuerpo y tu mente, adaptados a cada nivel y objetivo.
          </p>
        </div>

        <div className="relative">
          <ControlsClass
            onPrev={prevSlide}
            onNext={nextSlide}
            prevDisabled={currentIndex === 0}
            nextDisabled={currentIndex >= maxIndex}
          />

          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {fitnessClasses.map(card => (
                <div key={card.id} className="w-full flex-shrink-0 px-3 xl:w-1/4 lg:w-1/3 md:w-1/2 transform transition-transform duration-500 hover:scale-105 p-5 ">
                  <FitnessCard card={card} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-lime-500 w-8" : "bg-gray-300 hover:bg-gray-100"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-lime-500">8+</div>
            <div className="text-gray-200">Clases Diferentes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-lime-500">20+</div>
            <div className="text-gray-200">Sesiones Semanales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-lime-500">100+</div>
            <div className="text-gray-200">Miembros Felices</div>
          </div>
        </div>
      </div>
    </section>
  );
}