"use client"; // This is a client component 👈🏽

import AppBar from "@components/appbar";
import { useRouter } from "next/router";
import { Fragment, useState, PropsWithChildren, useEffect } from "react";
import { useAppSelector } from "src/hooks/hooks";
import { appConfigSelector } from "src/slices/appConfigSlices";
import i18n from "../i18n";
import { Language } from "@model/appconfig.model";
import Image from "next/image";
import { listLang } from "@model/default_content.model";
import FooterApp from "@components/footer_app";
import ViewMainTancePage from "./components/maintance_view";

interface ILayoutDashboardProps extends PropsWithChildren {}

const LayoutDashboard: React.FC<ILayoutDashboardProps> = (props) => {
  const { children } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { appConfig } = useAppSelector(appConfigSelector);
  const router = useRouter();
  const [maintance, setMainTance] = useState(false);
  const [lang, setLang] = useState("en");

  //
  useEffect(() => {
    setMainTance(appConfig?.maintenance == true ? true : false);
  }, [appConfig]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //
  const changeLanguageHandler = (langSelected: any) => {
    setIsOpen(false);
    i18n.changeLanguage(langSelected);  
    router.push(router.asPath, router.asPath, { locale: langSelected });
  };
  const onClickSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  useEffect(() => {
    setLang(router.locale || "en");
    i18n.changeLanguage(router.locale || "en");
  }, [router.locale]);

  const viewDropDownLang = () => {
    return (
      <>
        {isOpen && (
          <div className="absolute right-[25px] mt-2 lg:w-44 w-0 rounded-lg shadow-lg bg-white fixed top-[50px] z-10">
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              className="flex flex-col"
            >
              {listLang.map((item, index) => (
                <button
                  key={index}
                  className="hover:bg-gray-100 flex items-center flex-row justify-items-center py-2 content-center rounded-lg pl-2"
                  onClick={() => {
                    changeLanguageHandler(item.code);
                  }}
                >
                  <div className="h-[45px] w-[35px] content-center">
                    <Image src={item.image} width={45} height={45} alt="" />
                  </div>
                  <p className="block px-4 text-sm text-gray-700 font-PlexMono">
                    {item.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </>
    );
  };
  if (maintance == true) {
    return <ViewMainTancePage />;
  }
  //
  return (
    <>
      <div className="w-full h-full bg-zinc-100 ">
        {!sidebarOpen ? (
          <div className="relative flex flex-col flex-1 h-screen bg-zinc-100">
            <AppBar
              onClickLanguages={() => toggleDropdown()}
              onClick={() => onClickSideBar()}
              isMobile={false}
            />
            <div className="w-full bg-primaryBlack overflow-hidden overflow-y-auto">
              {children}
              <FooterApp />
            </div>
            {viewDropDownLang()}
          </div>
        ) : (
          <div className="w-full h-full">
            <AppBar
              onClickLanguages={() => toggleDropdown()}
              onClick={() => onClickSideBar()}
              isMobile={true}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default LayoutDashboard;
