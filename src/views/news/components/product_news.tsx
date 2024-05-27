/* eslint-disable @next/next/no-img-element */
// components/AboutUs.tsx
"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";
import ItemNews from "./items_new";

const ProductNews: React.FC = () => {
  const viewListProductNews = () => {
    return (
      <div className="pt-[50px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] justify-center items-center">
        <ItemNews />
        <ItemNews />
        <ItemNews />
      </div>
    );
  };
  return (
    <div className="our-solution-view">
      <div className="w-full flex flex-row justify-between justify-items-center">
        <div className="flex flex-row gap-[25px]">
          <span className="text-black lg:text-[36px] text-[24px] font-[700] font-Roboto whitespace-pre-line">
            {"Products News"}
          </span>
          <button className="py-[11px] px-[25px] text-[#343434] text-[14px] font-[500] rounded-[33px] border-[1px] border-[#CC5404]">
            {"View All".toUpperCase()}
          </button>
        </div>
        <div className="flex flex-row gap-[25px] h-fit">
          <button className="bg-[#6868681A] rounded-full p-[8px]">
            <img
              src={"/icons/ic-left.svg"}
              alt={`left`}
              className="w-[24px] h-[24px]"
            />
          </button>
          <button className="bg-[#3434348C] rounded-full p-[8px]">
            <img
              src={"/icons/ic_right.svg"}
              alt={`left`}
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
      </div>
      {viewListProductNews()}
    </div>
  );
};
export default ProductNews;
