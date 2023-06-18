import "./App.css";
import { Routes, Route } from "react-router-dom";
import Discover from "./Discover";
import Series from "./Series";
import Movies from "./Movies";
import Bookmarks from "./Bookmarks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNowPlayingMovies } from "./redux/thunks/movies/nowPlaying";
import { AppDispatch } from "./redux/store";
import { fetchAiringTodaySeries } from "./redux/thunks/series/airingToday";
import { fetchTrending } from "./redux/thunks/all";
import { fetchPopularTvSeries } from "./redux/thunks/series/popular";

const App = () => {
  const reduxDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    reduxDispatch(fetchNowPlayingMovies());
    reduxDispatch(fetchPopularTvSeries(1));
    reduxDispatch(fetchAiringTodaySeries());
    reduxDispatch(fetchTrending());

    return () => {};
  }, [reduxDispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="series" element={<Series />} />
        <Route path="movies" element={<Movies />} />
        <Route path="bookmarks" element={<Bookmarks />} />
      </Routes>
    </>
  );
};

export default App;
