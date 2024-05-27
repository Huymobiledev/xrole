import React, { useEffect, useState } from "react";

import LayoutDashboard from "src/layouts";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { appConfigSelector, fetchAppConfig } from "src/slices/appConfigSlices";
import Head from "next/head";
import { fetchNews } from "src/slices/articleSlices";
import i18next from "i18next";

interface IMainTancePage {}

const ViewMainTancePage: React.FC<IMainTancePage> = (props) => {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Under Maintenance</title>
          <meta
            name="description"
            content="Website is currently under maintenance. Please try again later."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-4xl font-bold">Website Maintenance</h1>
          <p className="mt-3 text-lg text-gray-600">
            We are currently performing maintenance on our website. Please try
            again later.
          </p>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <p className="text-gray-500">© 2024 Realcoin. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default ViewMainTancePage;
