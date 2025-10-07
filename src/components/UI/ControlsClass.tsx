"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
}

export const ControlsClass = ({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: CarouselControlsProps) => {
  return (
    <>
      <button
        onClick={onPrev}
        className=" z-10 -translate-y-1/4 rounded-full p-3 shadow-lg transition-all cursor-pointer hover:shadow-xl disabled:opacity-90 bg-gray-50 hover:bg-gray-300"
        disabled={prevDisabled}
      >
        <FaChevronLeft className="h-4 w-4 text-gray-900 hover:text-gray-900 " />
      </button>

      <button
        onClick={onNext}
        className="ml-2 z-10 -translate-y-1/4 rounded-full  p-3 shadow-lg transition-all cursor-pointer hover:shadow-xl disabled:opacity-90 bg-gray-50 hover:bg-gray-300"
        disabled={nextDisabled}
      >
        <FaChevronRight className="h-4 w-4 text-gray-900 hover:text-gray-900 " />
      </button>
    </>
  );
};