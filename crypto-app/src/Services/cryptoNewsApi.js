import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import thunk from 'redux-thunk';

export const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'e7b7662f20msh50f2a2ac750efa9p1d8753jsn933b860e16b4'
}

const middleware = [thunk];

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
  }),
  middleware
});

export const {
  useGetCryptosNewsQuery
} = cryptoNewsApi;