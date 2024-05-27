/* eslint-disable @next/next/no-img-element */
// components/AboutUs.tsx
"use client"; // This is a client component 👈🏽

import Image from "next/image";
import React, { useEffect, useState } from "react";

const OurSolutionHome: React.FC = () => {
  const ItemsCard = () => {
    return (
      <div className="relative w-full h-[auto] rounded-[20px] overflow-hidden shadow-lg">
        <img
          src="/images/bg_our_solution.svg"
          alt="Descriptive Alt Text"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#CC5404] to-transparent"></div>
        <div className="absolute bottom-0 p-3">
          <h2 className="text-white font-[700] text-[20px] mb-2">
            和沐宝 Spa Solution
          </h2>
          <p className="text-white font-[500] text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="our-solution-view">
      <span className="text-[#343434] lg:text-[36px] text-[24px] font-[700] font-Roboto whitespace-pre-line">
        {"Our Solution"}
      </span>
      <div className="our-solution-prod">
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
      </div>
    </div>
  );
};
export default OurSolutionHome;
