import { NextPage } from "next";
import { Fragment } from "react";
import ViewNewsPage from "src/views/news";

const NewsPage: NextPage = () => {
  return (
    <Fragment>
      <ViewNewsPage />
    </Fragment>
  );
};
export default NewsPage;
