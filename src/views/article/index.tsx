"use client";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import {
  articleSelector,
  fetchArticleBySlug,
  fetchNews,
} from "src/slices/articleSlices";
import DateConverter from "src/utils/DateTimeUtils";
import ArticleBox from "src/views/article/components/ArticleBox";
import LayoutDashboard from "src/layouts";
import Spinner from "@designs/Spinner";
import { t } from "i18next";
interface IArticleProps {
  slug: string;
}

const ArticleView: React.FC<IArticleProps> = ({ slug }) => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { articleDetail, lastestArticles } = useAppSelector(articleSelector);

  const [article, setArticle] = useState<IArticleModel>();

  useEffect(() => {
    if (slug != null) dispatch(fetchArticleBySlug(`${slug}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(() => {
    dispatch(fetchNews());
    if (slug != null) dispatch(fetchArticleBySlug(`${slug}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (articleDetail) {
      setArticle(articleDetail);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleDetail]);

  const listDetailArticle = () => {
    if(lastestArticles.length == 0) return <></>
    return (
      <>
        <div className="title_style my-5">{t('The lastest news').toUpperCase()}:</div>
        {lastestArticles.slice(0, 3).map((article, index) => (
          <div className="mb-2" key={index}>
            <ArticleBox renderPage={true} articleModel={article} />
          </div>
        ))}
      </>
    );
  };

  const detailViewArticle = () => {    
    return (
      <>
        {article?.thumb != null ? (
          <Image
            src={article?.thumb?.toString() ?? ""}
            className=" rounded-[20px] border border-[#d8d8d8] w-full sm:h-[400px] lg:h-[500px] h-[200px] "
            alt="artile image"
            width={900}
            height={200}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <></>
        )}

        <div className="flex justify-between mt-5 sm:flex-row flex-row-reverse">
          <p className="default_hightlight">{article?.category.name}</p>
          <p className="default_hightlight">
            {DateConverter.formatDate(article?.created_at)}
          </p>
        </div>

        {/* TITLE */}
        <div className="title_style mt-2">{article?.title}</div>

        {/* READING TIME */}
        {article?.reading_time != null && article?.reading_time != 0 ? (
          <div className="flex items-center font-PlexMono mt-3">
            <div className="default_hightlight">{t("Reading time")}:</div>
            &nbsp;{article?.reading_time}{" "}
            {article?.reading_time_unit ?? t("minutes")}
          </div>
        ) : (
          <></>
        )}

        {/* DIVIDER */}
        <div className="w-full h-0.5 bg-white my-12" />

        {/* CONTENT */}
        <div
          className="content_article"
          dangerouslySetInnerHTML={{ __html: `${article?.content}` }}
        />

        {/* DIVIDER */}
        <div className="w-full h-0.5 bg-white my-12" />
      </>
    );
  };
  return (
    <LayoutDashboard>
      <div className="flex flex-col sm:px-[10%] px-[5%] pt-12">
        <div className="overflow-hidden">
          {article != null ? (
            detailViewArticle()
          ) : (
            <div className="my-[120px] flex items-center w-full justify-center">
              <Spinner />
            </div>
          )}
        </div>
        {/* THE LASTEST NEWS: */}
        {listDetailArticle()}
      </div>
    </LayoutDashboard>
  );
};

export default ArticleView;
