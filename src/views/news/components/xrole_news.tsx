/* eslint-disable @next/next/no-img-element */
// components/AboutUs.tsx
"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";

const XRroleNews: React.FC = () => {
  const ItemPartners = () => {
    return (
      <div className="w-full rounded-[20px] shadow-md">
        <img
          src={"/img_news.svg"}
          alt={"image"}
          className="w-full h-auto rounded-t-[20px]"
        />
        <div className="p-[20px] bg-white rounded-b-[20px]">
          <span className="text-[#343434] text-[16px] font-[700] font-Roboto whitespace-pre-line">
            {"Partners News Highlight"}
          </span>
          <div className="py-[20px] flex">
            <div className="gap-[4px] flex flex-1 items-center">
              <img
                src={"/icons/ic_location.svg"}
                alt={"image"}
                className="w-[13px] h-[13px]"
              />
              <span className="text-[#686868] text-[14px]">{"Location"}</span>
            </div>
            <div className="gap-[4px] flex flex-1 items-center">
              <img
                src={"/icons/ic_calendar.svg"}
                alt={"image"}
                className="w-[13px] h-[13px]"
              />
              <span className="text-[#686868] text-[14px]">
                {"Jun 21-23, 2024"}
              </span>
            </div>
          </div>
          <span className="text-[#686868] text-[14px] font-[500] block overflow-hidden line-clamp-3">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          </span>
          <div className="flex py-[10px] justify-end items-end w-full">
            <span className=" text-[#CC5404] text-[14px] font-[700] ">
              {"Read Article >"}
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full h-fit bg-gradient-to-b to-[#FFFFFF00] from-[#FF990036] py-[100px] px-[50px] flex flex-col items-center justify-center">
      <span className="text-[#000000] lg:text-[36px] text-[24px] font-[500] font-Roboto whitespace-pre-line">
        {"The XROLE News"}
      </span>
      <span className="text-[#686868] text-[20px] font-[500] whitespace-pre-line mt-[20px] text-center">
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      </span>
      <div className="w-full mt-[50px] flex lg:flex-row flex-col gap-[50px]">
        <ItemPartners />
        <ItemPartners />
      </div>
    </div>
  );
};
export default XRroleNews;
