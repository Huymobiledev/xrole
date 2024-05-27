/* eslint-disable @next/next/no-img-element */
// components/AboutUs.tsx
"use client"; // This is a client component 👈🏽

import Image from "next/image";
import React, { useEffect, useState } from "react";

const BannerHome: React.FC = () => {
  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 50px)" }}>
      <img
        src="/images/banner_home.svg"
        alt="Descriptive Alt Text"
        className="w-full h-full object-cover"
      />
      <div className="banner-image-home">
        <div className="flex flex-col lg:items-start md:items-start items-center">
          <span className="banner-titles-home font-Roboto">
            {"Singsome KTV\nHemubao SPA\nfor Cemina Hotel\nand Switch the banner".toUpperCase()}
          </span>
          <button className="banner-button-home">
            <span className="text-white text-[15px] font-[700] whitespace-pre-line pr-[17px]">
              {"Discovery more".toUpperCase()}
            </span>
            <img
              src="/icons/ic_right.svg"
              alt="Descriptive Alt Text"
              className="h-[20px] object-containt"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default BannerHome;
