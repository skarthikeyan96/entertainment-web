import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../../constants";

export const fetchPopularTvSeries = createAsyncThunk(
  "popularSeries/fetchPopularTvSeries",
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`, options);
      return {results: response.data.results, totalResults: response.data.total_results, totalPages: response.data.total_pages, currentPage: response.data.page};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
