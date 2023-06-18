import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options, trendingTvShows } from "../../../constants";

export const fetchTrendingTVseries = createAsyncThunk(
  "trendingSeries/fetchTrendingTVseries",
  async (_obj, { rejectWithValue }) => {
    try {
      const response = await axios.get(trendingTvShows, options);
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
