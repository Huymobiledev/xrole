import React, { useEffect, useState } from "react";

import LayoutDashboard from "src/layouts";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { appConfigSelector, fetchAppConfig } from "src/slices/appConfigSlices";
import Head from "next/head";
import { fetchNews } from "src/slices/articleSlices";
import i18next from "i18next";
import XRroleNews from "./components/xrole_news";
import XRolePicks from "./components/xrole_picks";
import HeaderNews from "./components/header_news";
import CompanyNews from "./components/company_news";
import IndustryNews from "./components/industry_news";
import ProductNews from "./components/product_news";

interface INewsPage {}

const ViewNewsPage: React.FC<INewsPage> = (props) => {
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
        <div className=" overflow-y-auto overflow-x-hidden bg-white">
          <XRroleNews />
          <XRolePicks />
          <HeaderNews />
          <CompanyNews />
          <IndustryNews />
          <ProductNews />
        </div>
      </LayoutDashboard>
    </>
  );
};

export default ViewNewsPage;
