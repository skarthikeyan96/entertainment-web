import {createSlice} from '@reduxjs/toolkit'
import { fetchPopularMovies } from '../thunks/movies/popular';

const initialState = {
    items: [],
    totalResults: 0,
    totalPages: 0,
    isLoading: false,
    currentPage: 0,
    error: ''
}

const popularMovieSlice = createSlice({
    name: "popularMovies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPopularMovies.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
            state.isLoading = false
            state.items = action.payload.results
            state.totalResults = action.payload.totalResults
            state.totalPages = action.payload.totalPages
            state.currentPage = action.payload.currentPage
          })
          builder.addCase(fetchPopularMovies.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
          })
    }
})

export default popularMovieSlice.reducer