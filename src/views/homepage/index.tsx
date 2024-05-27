import React, { useEffect, useState } from "react";

import LayoutDashboard from "src/layouts";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { appConfigSelector, fetchAppConfig } from "src/slices/appConfigSlices";
import Head from "next/head";
import { fetchNews } from "src/slices/articleSlices";
import i18next from "i18next";
import BannerHome from "./components/banner";
import OurSolutionHome from "./components/our_solution";
import EventCompanyHome from "./components/event_company";
import NewsMediaHome from "./components/news_media";

interface IHomeProps {}

const ViewHomePage: React.FC<IHomeProps> = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18next.languages]);
  return (
    <>
      <LayoutDashboard>
        <div className=" overflow-y-auto overflow-x-hidden  bg-white">
          <BannerHome />
          <OurSolutionHome />
          <EventCompanyHome />
          <NewsMediaHome />
        </div>
      </LayoutDashboard>
    </>
  );
};

export default ViewHomePage;
