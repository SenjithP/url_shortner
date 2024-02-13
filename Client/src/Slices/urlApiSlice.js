import { apiSlice } from "./apiSlice";
const HOME_URL = "/api/home";

export const urlApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    shotenUrl: builder.mutation({
      query: (data) => ({
        url: `${HOME_URL}/shotenUrl`,
        method: "POST",
        body: data,
      }),
    }),
    viewUrl:builder.mutation({
      query: (params) => ({
        url: `${HOME_URL}/getUrl?id=${params.id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useShotenUrlMutation, useViewUrlMutation } = urlApiSlice;
