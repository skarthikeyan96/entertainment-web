import "./App.css";
import { Routes, Route } from "react-router-dom";
import Discover from "./Discover";
import Series from "./Series";
import Movies from "./Movies";
import Bookmarks from "./Bookmarks";
import { useEffect, useReducer } from "react";
import { reducer, initalState } from "./Reducer";
import axios from 'axios'

const App = () => {

  const trendingUrl =
  "https://api.themoviedb.org/3/trending/all/day?language=en-US";

const nowPlayingUrl =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US";

const airingTodayUrl = "https://api.themoviedb.org/3/tv/airing_today?language=en-US";

const trendingTvShows = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
  },
};

const [state, dispatch] = useReducer(reducer, initalState);

useEffect(() => {
  dispatch({ type: "CALL_API" });
  const fetchTrendingResults = async () => {
    const response: any = await axios.get(trendingUrl, options);

    if (response.status == 200) {
      dispatch({
        type: "SUCCESS_TRENDING_DATA",
        trendingData: response.data.results,
      });
      return;
    }
    dispatch({ type: "ERROR", error: response.toJSON() });
  };

  const fetchNowPlayingResults = async () => {
    const response: any = await axios.get(nowPlayingUrl, options);

    if (response.status == 200) {
      dispatch({
        type: "SUCCESS_NOW_PLAYING_DATA",
        nowPlaying: response.data.results,
      });
      return;
    }
    dispatch({ type: "ERROR", error: response.toJSON() });
  };

  const fetchAiringTodayTvShows = async () => {
    const response: any = await axios.get(airingTodayUrl, options);

    if (response.status == 200) {
      dispatch({
        type: "SUCCESS_AIRING_TODAY_DATA",
        airingToday: response.data.results,
      });
      return;
    }
    dispatch({ type: "ERROR", error: response.toJSON() });
  };

  const fetchTrendingTV = async () => {
    const response: any = await axios.get(trendingTvShows, options);

    if (response.status == 200) {
      dispatch({
        type: "SUCCESS_TRENDING_TV_SHOWS",
        trendingTV: response.data.results,
      });
      return;
    }
    dispatch({ type: "ERROR", error: response.toJSON() });
  };

  fetchTrendingResults();
  fetchNowPlayingResults();
  fetchAiringTodayTvShows();
  fetchTrendingTV()


  return () => {
    console.log("resetting ❌");
    dispatch({ type: "RESET_STATE" });
  };
}, []);

console.log(state)
  return (
    <> 
      <Routes>
        <Route path="/" element={<Discover loading={state.loading} trending={state.trendingData} nowPlaying={state.nowPlaying} airingToday={state.airingToday}/>} />
        <Route path="series" element={<Series loading={state.loading} trendingTV={state.trendingTV} />} />
        <Route path="movies" element={<Movies/>} />
        <Route path="bookmarks" element={<Bookmarks/>} />
      </Routes>
    </>
  );
};

export default App;
