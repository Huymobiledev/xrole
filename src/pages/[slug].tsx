import { GetServerSidePropsContext, NextPage } from "next";
import { Fragment } from "react";
import { baseAPI } from "src/api/common";
import { _getAPISSR } from "src/api/commonSSR";
import ArticleView from "src/views/article";

export default function ArticlePage(props: any) {
  return (
    <Fragment>
      <ArticleView slug={props.slug} />
    </Fragment>
  );
}
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const slug = ctx.params?.slug;

  return {
    props: {
      slug,
    }, // will be passed to the page component as props
  };
}
