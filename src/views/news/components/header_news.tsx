/* eslint-disable @next/next/no-img-element */
// components/AboutUs.tsx
"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";

const HeaderNews: React.FC = () => {
  const listHeader: string[] = [
    "News",
    "Company News",
    "Products News",
    "Partner’s New",
    "Industry New",
  ];
  return (
    <div className="w-full py-[10px] flex flex-row justify-center border-y-2 border border-[#6868681A]">
      {listHeader.map((text, index) => (
        <button
          key={index}
          className={`rounded-[20px] px-[20px] py-[10px] ${
            index === 0 ? "bg-[#6868680D]" : "#FFFFFF"
          } text-[15px] ${index === 0 ? "text-black" : "text-[#686868]"}`}
        >
          {text}
        </button>
      ))}
    </div>
  );
};
export default HeaderNews;
