interface IArticleCategoryModel {
  category_id: string;
  name: string;
}

interface IArticleModel {
  article_id: string;
  category: IArticleCategoryModel;
  title: string;
  slug: string;
  intro: string;
  content: string;
  lang: string;
  created_at: string;
  thumb: string;
  reading_time:number;
  reading_time_unit: string
}
