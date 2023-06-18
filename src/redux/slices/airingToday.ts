import {createSlice} from '@reduxjs/toolkit'
import { fetchAiringTodaySeries } from '../thunks/series/airingToday'

const initialState = {
    airingToday: [],
    isLoading: false,
    error: ''
}

const airingTodayTVSlice = createSlice({
    name: "airingToday",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAiringTodaySeries.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(fetchAiringTodaySeries.fulfilled, (state, action) => {
            state.isLoading = false
            state.airingToday = action.payload
          })
          builder.addCase(fetchAiringTodaySeries.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
          })
    }
})

export default airingTodayTVSlice.reducer