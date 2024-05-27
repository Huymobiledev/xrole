import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "src/hooks/store";
import { getLatestNews, getNewsDetails } from "src/api/news";

type ArticleState = {
  lastestArticles: IArticleModel[];
  articleDetail: IArticleModel | null;
};

const initialState: ArticleState = {
  lastestArticles: [],
  articleDetail: null,
};

// data

export const fetchNews = createAsyncThunk(
  "news/fetch",
  async (_arg, thunkApi) => {
    try {
      const response = await getLatestNews();
      console.log(`news: ${JSON.stringify(response)}`);
      return response.data;
    } catch (exception: any) {
      console.log(`news exception: ${exception}`);
      return thunkApi.rejectWithValue(exception);
    }
  }
);

export const  fetchArticleBySlug = createAsyncThunk(
  "news/fetchBySlug",
  async (props: string, thunkApi) => {
    try {
      const response = await getNewsDetails(props);
      console.log(`news detail: ${JSON.stringify(response)}`);
      return response.data;
    } catch (exception: any) {
      console.log(`news exception: ${exception}`);
      return thunkApi.rejectWithValue(exception);
    }
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      //   state.isFetchingConfig = false;
      state.lastestArticles = payload;
    }),
      builder.addCase(fetchNews.rejected, (state, _action) => {
        // state.isFetchingConfig = false;
        // state.fetchingConfigError = true;
      }),
      builder.addCase(fetchNews.pending, (state, _action) => {
        // state.isFetchingConfig = true;
        // state.fetchingConfigError = false;
      }),
      builder.addCase(fetchArticleBySlug.fulfilled, (state, { payload }) => {
        //   state.isFetchingConfig = false;
        state.articleDetail = payload;
      });
  },
});

export const articleSelector = (state: RootState) => state.articleReducer;
