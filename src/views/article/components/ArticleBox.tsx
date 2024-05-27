import { PATH } from "@routes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

interface IArticleBoxProps {
  articleModel: IArticleModel;
  renderPage: boolean;
}

const ArticleBox: React.FC<IArticleBoxProps> = (props) => {
  const { articleModel } = props;
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <button
    className="w-full"
      onClick={() => {
        router.push(PATH.OVERVIEW + `${articleModel.slug}`).then(() => {
          if (props.renderPage) router.reload();
        });
      }}
    >
      <div className="flex bg-white rounded-r-full overflow:hidden p-3  w-full h-56 gap-2">
        {/* TEXT */}
        <div className="flex flex-col w-1/2 gap-2 justify-start text-start">
          <p className=" sm:text-[22px] text-[18px] text-primaryBlack line-clamp-3 font-extrabold pt-1">
            {articleModel?.title.trim().toUpperCase() ?? ""}
          </p>
          <div className="flex-1 font-PlexMono sm:text-[14px] text-[12px] text-primaryBlack line-clamp-2">
            {articleModel?.intro ?? ""}
          </div>
          <div className="bg-black font-PlexMono p-2">
            {t("Read Now").toUpperCase()}
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-1/2">
          <Image
            src={articleModel.thumb ?? ""}
            width={372}
            height={167}
            alt={`image_news}`}
            className=" rounded-r-full w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </button>
  );
};

export default ArticleBox;
