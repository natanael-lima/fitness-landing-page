"use client";

import { useState, useEffect } from "react";
import { FitnessCard } from "./FitnessCard";
import { CarouselControls } from "./CarouselControls";
import { fitnessClasses } from "./data";

export default function FitnessCarousel() {
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
    <section className="w-full h-[100vh] ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-100 sm:text-4xl">Fitness Classes</h2>
        </div>

        <div className="relative">
          <CarouselControls
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
                <div key={card.id} className="w-full flex-shrink-0 px-3 xl:w-1/4 lg:w-1/3 md:w-1/2">
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
                  index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">10+</div>
            <div className="text-gray-600">Different Classes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">50+</div>
            <div className="text-gray-600">Weekly Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">200+</div>
            <div className="text-gray-600">Happy Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}