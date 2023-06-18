import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nowPlayingUrl, options } from "../../../constants";

export const fetchNowPlayingMovies = createAsyncThunk(
  "movies/fetchNowPlayingMovies",
  async (_obj, { rejectWithValue }) => {
    try {
      const response = await axios.get(nowPlayingUrl, options);
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
