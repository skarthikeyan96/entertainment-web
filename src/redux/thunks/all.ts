// Get the both trending tv and movie data

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options, trendingUrl } from "../../constants";

export const fetchTrending = createAsyncThunk(
  "all/fetchTrending",
  async (_obj, { rejectWithValue }) => {
    try {
      const response = await axios.get(trendingUrl, options);
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
