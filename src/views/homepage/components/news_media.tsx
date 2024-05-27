/* eslint-disable @next/next/no-img-element */
// components/AboutUs.tsx
"use client"; // This is a client component 👈🏽

import React from "react";

const NewsMediaHome: React.FC = () => {
  const ItemIndustrys = () => {
    return (
      <div className="flex flex-col gap-[10px] w-full mt-2">
        <p className="new-media-text">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        </p>
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
    );
  };
  const ItemPartners = () => {
    return (
      <div className="w-full rounded-[20px] shadow-md">
        <img
          src={"/img_news.svg"}
          alt={"image"}
          className="w-full h-auto rounded-t-[20px]"
        />
        <div className="p-[20px]">
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
  const ItemIndustryNews = () => {
    return (
      <div className="w-full h-full rounded-[20px] shadow-md gap-[30px] p-[20px]">
        <ItemIndustrys />
        <ItemIndustrys />
        <ItemIndustrys />
        <ItemIndustrys />
        <ItemIndustrys />
        <ItemIndustrys />
      </div>
    );
  };
  return (
    <div className="our-solution-view">
      <span className="text-[#343434] lg:text-[36px] text-[24px] font-[700] font-Roboto whitespace-pre-line">
        {"News & Media"}
      </span>
      <div className="pt-[50px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[50px] justify-center items-center">
        <ItemPartners />
        <ItemPartners />
        <ItemIndustryNews />
      </div>
      <div className="mt-[50px] flex items-center justify-center gap-[50px]">
        <button className="py-[15px] px-[50px] text-[#343434] text-[14px] font-[700] rounded-[33px] border-[1px] border-[#CC5404]">
          {"Read More".toUpperCase()}
        </button>
      </div>
    </div>
  );
};
export default NewsMediaHome;
