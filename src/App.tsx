import "./App.css";
import { Routes, Route } from "react-router-dom";
import Discover from "./Discover";
import Series from "./Series";
import Movies from "./Movies";
import Bookmarks from "./Bookmarks";
import { useEffect, useReducer } from "react";
import { reducer, initalState } from "./Reducer";
import axios from 'axios'
import { trendingUrl, options, nowPlayingUrl, airingTodayUrl, trendingTvShows } from "./constants";
import {useDispatch} from 'react-redux'
import { fetchNowPlayingMovies } from "./redux/thunks/movies/nowPlaying";
import { fetchTrendingTVseries } from "./redux/thunks/series/trending";
import { AppDispatch } from "./redux/store";
import { fetchAiringTodaySeries } from "./redux/thunks/series/airingToday";
import { fetchTrending } from "./redux/thunks/all";

const App = () => {


const [state, dispatch] = useReducer(reducer, initalState);

const reduxDispatch = useDispatch<AppDispatch>()

useEffect(() => {
  reduxDispatch(fetchNowPlayingMovies())
  reduxDispatch(fetchTrendingTVseries())
  reduxDispatch(fetchAiringTodaySeries())
  reduxDispatch(fetchTrending())

  return () => {
    
  }
}, [reduxDispatch])

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

  // ✅
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

    // ✅
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

  // ✅
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
