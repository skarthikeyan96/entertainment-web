import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { airingTodayUrl, options } from "../../../constants";

export const fetchAiringTodaySeries = createAsyncThunk(
  "airingToday/fetchAiringTodaySeries",
  async (_obj, { rejectWithValue }) => {
    try {
      const response = await axios.get(airingTodayUrl, options);
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
