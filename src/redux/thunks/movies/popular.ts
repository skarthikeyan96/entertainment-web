import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../../constants";

export const fetchPopularMovies = createAsyncThunk(
  "popularMovies/fetchPopularMovies",
  async (page: number = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options);
      return {results: response.data.results, totalResults: response.data.total_results, totalPages: response.data.total_pages, currentPage: response.data.page};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
