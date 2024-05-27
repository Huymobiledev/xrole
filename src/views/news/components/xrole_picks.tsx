/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const XRolePicks: React.FC = () => {
  const ItemRolePicks = () => {
    return (
      <div className="w-full h-full flex flex-col">
        <div className="py-[11px] px-[20px] bg-[#17E3FF] w-fit rounded-[30px]">
          <span className="text-[#424242] text-[14px] font-[700]">
            Company News
          </span>
        </div>
        <div className="flex flex-col mt-[20px] justify-between">
          <span className="text-[#424242] text-[14px] font-[700] min-h-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
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
      </div>
    );
  };
  return (
    <div className="bg-gradient-to-b to-[#FFFFFF00] from-[#68686808] w-full h-auto py-[100px] px-[50px] flex flex-col">
      <span className="text-[#000000] lg:text-[36px] text-[24px] font-[500] font-Roboto whitespace-pre-line">
        {"Xrole’s Picks"}
      </span>
      <div className="pt-[50px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] justify-center items-center">
        <ItemRolePicks />
        <ItemRolePicks />
        <ItemRolePicks />
        <ItemRolePicks />
      </div>
    </div>
  );
};
export default XRolePicks;
