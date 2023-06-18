import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './slices/movies';
import trendingSeries from './slices/popularSeries';
import airingTodayTVSlice from './slices/airingToday';
import all from './slices/all'; // get both trending tv and movies data
import popularSeries from './slices/popularSeries';

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    popularSeries: popularSeries,
    airingTodaySeries: airingTodayTVSlice,
    trending: all
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch