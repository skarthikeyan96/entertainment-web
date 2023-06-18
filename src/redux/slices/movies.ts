import {createSlice} from '@reduxjs/toolkit'
import { fetchNowPlayingMovies } from '../thunks/movies/nowPlaying'

const initialState = {
    nowPlaying: [],
    isLoading: false,
    error: ''
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNowPlayingMovies.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
            state.isLoading = false
            state.nowPlaying = action.payload
          })
          builder.addCase(fetchNowPlayingMovies.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
          })
    }
})

export default movieSlice.reducer