import {createSlice} from '@reduxjs/toolkit'
import { fetchTrendingTVseries } from '../thunks/series/trending'

const initialState = {
    items: [],
    isLoading: false,
    error: ''
}

const trendingTVSlice = createSlice({
    name: "trendingSeries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrendingTVseries.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(fetchTrendingTVseries.fulfilled, (state, action) => {
            state.isLoading = false
            state.items = action.payload
          })
          builder.addCase(fetchTrendingTVseries.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
          })
    }
})

export default trendingTVSlice.reducer