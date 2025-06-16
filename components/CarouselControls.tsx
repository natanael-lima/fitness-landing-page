"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
}

export const CarouselControls = ({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: CarouselControlsProps) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl disabled:opacity-50"
        disabled={prevDisabled}
      >
        <FaChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl disabled:opacity-50"
        disabled={nextDisabled}
      >
        <FaChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </>
  );
};