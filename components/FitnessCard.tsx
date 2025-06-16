"use client";

import { FaClock, FaUserFriends } from "react-icons/fa";
import { ReserveButton } from "./Button";

interface FitnessCardProps {
  card: {
    id: number;
    title: string;
    description: string;
    image: string;
    duration: string;
    capacity: string;
    instructor: string;
  };
}

export const FitnessCard = ({ card }: FitnessCardProps) => {

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="aspect-[2/2] overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-300 "
        />
      </div>

      <div className="absolute inset-0 bg-lime-900/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
        <div className="flex h-full flex-col justify-center p-6 text-white">
          <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
          <p className="mb-4 text-sm leading-relaxed">{card.description}</p>

          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <FaClock className="h-4 w-4" />
              <span>{card.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaUserFriends className="h-4 w-4" />
              <span>{card.capacity}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Instructor:</span>
              <span>{card.instructor}</span>
            </div>
          </div>
          <ReserveButton />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900">{card.title}</h3>
        <p className="text-sm text-gray-600">
          {card.duration} • {card.instructor}
        </p>
      </div>
    </div>
  );
};