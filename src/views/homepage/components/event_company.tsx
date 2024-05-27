/* eslint-disable @next/next/no-img-element */
// components/AboutUs.tsx
"use client"; // This is a client component 👈🏽

import Image from "next/image";
import React, { useEffect, useState } from "react";

const EventCompanyHome: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === listImage.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? listImage.length - 1 : currentSlide - 1
    );
  };

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };
  const listImage: string[] = [
    "/img_event_1.svg",
    "/img_event_2.svg",
    "/img_event_3.svg",
    "/img_event_4.svg",
    "/img_event_5.svg",
    "/img_event_6.svg",
    "/img_event_7.svg",
  ];
  const imageSlider = () => {
    return (
      <div className="event-company-image flex-col">
        <div className="relative items-center justify-center w-full">
          <img
            src={listImage[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-[350px] object-cover rounded-[20px]"
          />

          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#3434348C] rounded-full p-[8px]"
            onClick={prevSlide}
          >
            <img
              src={"/icons/ic-left.svg"}
              alt={`left`}
              className="w-[24px] h-[24px]"
            />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#3434348C] rounded-full p-[8px]"
            onClick={nextSlide}
          >
            <img
              src={"/icons/ic_right.svg"}
              alt={`left`}
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
        <div className="flex justify-center mt-[20px] h-fit w-full gap-[8px]">
          {listImage.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[20px] h-[4px] rounded-[3px] ${
                index === currentSlide ? "bg-[#686868]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="our-solution-view bg-[#FAFAFA]">
      <span className="text-[#343434] lg:text-[36px] text-[24px] font-[700] font-Roboto whitespace-pre-line">
        {"Company Events Highlight"}
      </span>
      <div className="event-company-prod">
        {listImage.map((src, index) => (
          <div key={index} className="w-full">
            <img
              src={src}
              alt={`Event ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      {imageSlider()}
    </div>
  );
};
export default EventCompanyHome;
