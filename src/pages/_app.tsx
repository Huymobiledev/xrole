// Lib import
import { AppProps } from "next/app";
import Head from "next/head";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import "@styles/global/index.css";
import "@styles/text/index.css";
import "@styles/responsive/index.css";
import "@styles/nprogess/index.css";
import { Provider } from "react-redux";
import configureStore from "../hooks/store";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SeoDataApp } from "@model/appconfig.model";
import { SeoDataAppDeault } from "@model/default_content.model";
import { useAppSelector } from "src/hooks/hooks";
import { appConfigSelector } from "src/slices/appConfigSlices";
require("dotenv").config();

const WebApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const router = useRouter();

  const [seoData, setSeoData] = useState<SeoDataApp>(SeoDataAppDeault);
  return (
    <main className="flex h-screen flex-col items-center font-Montserrat">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="icon" href="/images/favicon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          property="og:title"
          content={
            pageProps?.title || router.locale == "vi"
              ? seoData.vi?.title
              : seoData.en.title
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.realcoin.network/" />
        <meta
          property="og:image"
          content={
            pageProps?.image || router.locale == "vi"
              ? seoData.vi?.image
              : seoData.en.image
          }
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content={
            pageProps?.description || router.locale == "vi"
              ? seoData.vi?.description
              : seoData.en.description
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Realcoin" />
        <meta name="twitter:creator" content="@Realcoin Network, Inc" />
        <meta
          name="twitter:title"
          content={
            pageProps?.title || router.locale == "vi"
              ? seoData.vi?.title
              : seoData.en.title
          }
        />
        <meta
          name="twitter:description"
          content={
            pageProps?.description || router.locale == "vi"
              ? seoData.vi?.description
              : seoData.en.description
          }
        />
        <meta
          name="twitter:image"
          content={
            pageProps?.image || router.locale == "vi"
              ? seoData.vi?.image
              : seoData.en.image
          }
        />
      </Head>
      <Provider store={configureStore}>
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </Provider>
    </main>
  );
};

export default WebApp;

declare module "next" {
  interface NextApiRequest {
    email: string;
  }
}
