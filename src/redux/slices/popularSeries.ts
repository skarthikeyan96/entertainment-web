import {createSlice} from '@reduxjs/toolkit'
import { fetchPopularTvSeries } from '../thunks/series/popular'

const initialState = {
    items: [],
    totalResults: 0,
    totalPages: 0,
    isLoading: false,
    currentPage: 0,
    error: ''
}

const popularTVSlice = createSlice({
    name: "popularSeries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPopularTvSeries.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(fetchPopularTvSeries.fulfilled, (state, action) => {
            state.isLoading = false
            state.items = action.payload.results
            state.totalResults = action.payload.totalResults
            state.totalPages = action.payload.totalPages
            state.currentPage = action.payload.currentPage
          })
          builder.addCase(fetchPopularTvSeries.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
          })
    }
})

export default popularTVSlice.reducer