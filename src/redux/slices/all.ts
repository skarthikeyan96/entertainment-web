import {createSlice} from '@reduxjs/toolkit'
import { fetchTrending } from '../thunks/all'

const initialState = {
  items: [],
    isLoading: false,
    error: ''
}

const allDataSlice = createSlice({
    name: "all",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrending.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(fetchTrending.fulfilled, (state, action) => {
            state.isLoading = false
            state.items = action.payload
          })
          builder.addCase(fetchTrending.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
          })
    }
})

export default allDataSlice.reducer