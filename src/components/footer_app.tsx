// components/AboutUs.tsx
"use client"; // This is a client component 👈🏽

import Image from "next/image";
import React, { useEffect, useState } from "react";

const FooterApp: React.FC = () => {
  const listConnect: string[] = [
    "/icons/ic_fb.svg",
    "/icons/ic_yt.svg",
    "/icons/ic_insta.svg",
    "/icons/ic_wechat.svg",
    "/icons/ic_weibo.svg",
    "/icons/ic_linkedin.svg",
    "/icons/ic_tiktok.svg",
  ];
  const titleQuickLink: string[] = [
    "Products",
    "Supports",
    "Partners",
    "Contact Us",
  ];
  const titleCompanyInfo: string[] = [
    "About Us",
    "Careers",
    "Investors",
    "New & Media",
    "Our Business",
  ];
  const titleStayConnected: string[] = [
    "微信公众号",
    "Chat Online",
    "400-hot line",
    "Email to",
  ];
  const titleFooter: string[] = [
    "© 2024, Xrole Ltd",
    "•Privacy",
    "•Terms",
    "•Sitemap",
  ];

  const ViewLogo = () => {
    return (
      <div className="flex flex-col">
        <img
          src={"/img_logo.svg"}
          alt={`img_logo`}
          className="w-[104px] h-auto"
        />
        <div className="mt-[20px] flex flex-row gap-[16px]">
          {listConnect.map((src, index) => (
            <button>
              <img
                src={src}
                alt={`Event ${index + 1}`}
                className="w-[18px] h-auto"
              />
            </button>
          ))}
        </div>
      </div>
    );
  };
  const ViewQuickLink = () => {
    return (
      <div className="flex flex-col gap-[16px]">
        <span className="text-[#343434] text-[16px] font-[600] font-Roboto whitespace-pre-line">
          {"Quick Link"}
        </span>
        <div className="w-full h-[2px] bg-[#CC5404]" />
        {titleQuickLink.map((src, index) => (
          <button
            key={index}
            className="text-[#686868] text-[14px] font-[500] whitespace-pre-line text-left"
          >
            {src}
          </button>
        ))}
      </div>
    );
  };
  const ViewCompanyInfo = () => {
    return (
      <div className="flex flex-col gap-[16px]">
        <span className="text-[#343434] text-[16px] font-[600] font-Roboto whitespace-pre-line">
          {"Company Info"}
        </span>
        <div className="w-full h-[2px] bg-[#CC5404]" />
        {titleStayConnected.map((src, index) => (
          <button
            key={index}
            className="text-[#686868] text-[14px] font-[500] whitespace-pre-line text-left"
          >
            {src}
          </button>
        ))}
      </div>
    );
  };
  const ViewStayConnected = () => {
    return (
      <div className="flex flex-col gap-[16px]">
        <span className="text-[#343434] text-[16px] font-[600] font-Roboto whitespace-pre-line">
          {"Stay Connected"}
        </span>
        <div className="w-full h-[2px] bg-[#CC5404]" />
        {titleCompanyInfo.map((src, index) => (
          <button
            key={index}
            className="text-[#686868] text-[14px] font-[500] whitespace-pre-line text-left"
          >
            {src}
          </button>
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="footer">
        <ViewLogo />
        <div className="flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 flex-1 gap-[24px] lg:pl-[100px] lg:pt-0 pt-[20px]">
          <ViewQuickLink />
          <ViewCompanyInfo />
          <ViewStayConnected />
        </div>
      </div>
      <div className="bg-white w-full py-[22px] lg:px-[50px] px-[20px] flex lg:flex-row flex-col justify-between">
        <div className="flex flex-row gap-[8px]">
          {titleFooter.map((src, index) => (
            <button
              key={index}
              className="text-[#343434] text-[14px] font-[500] whitespace-pre-line text-left"
            >
              {src}
            </button>
          ))}
        </div>
        <button className="gap-[4px] flex flex-row">
          <img
            src={"/icons/ic_global.svg"}
            alt={`img_logo`}
            className="w-[24px] h-auto"
          />
          <span className="text-[#343434] text-[14px] font-[600] font-Roboto whitespace-pre-line underline underline-offset-1">
            English (US)
          </span>
        </button>
      </div>
    </>
  );
};
export default FooterApp;
