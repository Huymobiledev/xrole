// components/AppBar.tsx
import { FooterHome, Language } from "@model/appconfig.model";
import {
  DefaultAppBar,
  FoooterHomeDefault,
  listLang,
} from "@model/default_content.model";
import Image from "next/image";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "src/hooks/hooks";
import { appConfigSelector } from "src/slices/appConfigSlices";
import i18n from "../i18n";
import { PATH } from "@routes";
interface IAppBarProps extends PropsWithChildren {
  onClick: () => void;
  onClickLanguages: () => void;
  isMobile: boolean;
}

const AppBar: React.FC<IAppBarProps> = (props) => {
  const router = useRouter();
  const { appConfig } = useAppSelector(appConfigSelector);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const [footerHome, setFooterHome] = useState<FooterHome>(FoooterHomeDefault);
  useEffect(() => {
    if (appConfig?.footer_home != null) {
      setFooterHome(appConfig?.footer_home);
    }
  }, [appConfig]);

  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(router.locale || "en");
  }, [router.locale]);

  const getImageLanguagesActive = () => {
    const index = listLang.findIndex((item: Language) => item.code === lang);
    if (index >= -1) {
      return listLang[index].image;
    }
    return listLang[0].image;
  };

  //handle click go to view in screen
  const handleClick = (index: number) => {};
  const changeLanguageHandler = (langSelected: any) => {
    setIsOpen(false);
    i18n.changeLanguage(langSelected);
    router.push(router.asPath, router.asPath, { locale: langSelected });
    props.onClick();
  };
  //
  const viewDropDownLang = () => {
    return (
      <>
        {isOpen && (
          <div className="right-[30px] mt-2 rounded-lg shadow-lg bg-white fixed top-[50px] z-10">
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
                  <p className="block px-4 text-sm text-gray-700 font-RobotoSerif">
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
  //
  const viewAppBarForDesktop = () => {
    return (
      <nav className="w-full lg:px-[50px] px-[20px] py-[14.5px] flex items-center justify-between">
        <div className="flex items-center gap-[50px]">
          <button
            onClick={() => {
              router.push(PATH.OVERVIEW).then(() => {
                router.reload();
              });
            }}
          >
            <Image
              src="/img_logo.svg"
              alt="Left Icon"
              width={104}
              height={21}
            />
          </button>
          <div className="lg:flex lg:w-auto hidden items-center gap-[50px]">
            {DefaultAppBar.map((feature, index) => (
              <button
                onClick={() => {
                  handleClick(index);
                }}
                key={index}
                className={`${
                  index == 0 ? "text-[#343434]" : "text-[#686868]"
                } font-[500] text-[15px] font-Montserrat`}
              >
                {t(feature)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative flex items-center lg:flex lg:w-auto hidden">
            <input
              type="text"
              placeholder="Search Here"
              className="border-[#CC5404] font-[14px] w-52 h-8 pl-4 pr-8 text-gray-700 bg-white border rounded-full"
            />
            <svg
              className="absolute right-2 w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.386-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="hidden items-center w-full lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <button
              type="button"
              className="inline-flex items-center ml-2 text-sm text-gray-500 rounded-[8px] p-[5px] gap-2"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => {
                props.onClickLanguages();
              }}
            >
              |
              <div className=" w-[25px]">
                <Image
                  src={getImageLanguagesActive()}
                  width={30}
                  height={30}
                  alt="photo"
                  className="rounded-sm"
                />
              </div>
            </button>
          </div>
          {viewMenuMobile()}
        </div>
      </nav>
    );
  };
  const viewMenuMobile = () => {
    return (
      <div className="flex lg:hidden">
        <button
          type="button"
          className="inline-flex items-center ml-2 text-sm text-gray-500 rounded-[8px] p-[5px] gap-2"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className=" w-[25px]">
            <Image
              src={getImageLanguagesActive()}
              width={30}
              height={30}
              alt="photo"
              className="rounded-[3px]"
            />
          </div>
        </button>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 items-center"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          onClick={props.onClick}
        >
          <div className=" w-[24px] h-[24px]">
            <Image
              src={"/icons/ic_menu.svg"}
              width={30}
              height={30}
              alt="photo"
            />
          </div>
        </button>
      </div>
    );
  };
  const viewAppBarForMobile = () => {
    return (
      <nav className="mt-[20px] flex flex-col items-start h-screen">
        {DefaultAppBar.map((feature, index) => (
          <button
            key={index}
            onClick={() => {
              props.onClick();
              handleClick(index);
            }}
            className="h-[51px] w-full text-white text-[21px] pl-7 border-l-4 border-indigo-500 ml-[13px] my-[21px] text-left font-PlexMono font-medium"
          >
            {t(feature).toUpperCase()}
          </button>
        ))}
      </nav>
    );
  };

  return (
    <>
      {props.isMobile == false ? (
        viewAppBarForDesktop()
      ) : (
        <div className="relative flex flex-col p-2  bg-black">
          <div className="flex flex-row items-center justify-between p-2">
            <button
              onClick={() => {
                router
                  .replace(router.pathname, router.pathname, { scroll: true })
                  .then(() => {
                    router.reload();
                  });
              }}
            >
              <Image
                src="/img_logo.svg"
                alt="Left Icon"
                width={104}
                height={30}
              />
            </button>
            <div className="flex items-center pr-[15px]">
              <button
                type="button"
                className="flex items-center justify-center w-[18px] h-[18px] ml-4"
                onClick={props.onClick}
              >
                <Image
                  src={"/icons/ic_close.svg"}
                  width={25}
                  height={25}
                  alt="photo"
                />
              </button>
            </div>
          </div>
          {viewAppBarForMobile()}
          {viewDropDownLang()}
        </div>
      )}
    </>
  );
};

export default AppBar;
