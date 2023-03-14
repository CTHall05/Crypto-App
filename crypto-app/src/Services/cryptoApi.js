import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import thunk from 'redux-thunk';

export const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'e7b7662f20msh50f2a2ac750efa9p1d8753jsn933b860e16b4',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const middleware = [thunk];

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    })
  }),
  middleware
});


export const {
  useGetCryptosQuery,
} = cryptoApi;