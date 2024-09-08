import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
       nowPlaying: null
    },
    reducers: {
        addNowPlaying: (state, action) =>{
            state.nowPlaying=action.payload;
        }
    },
});


export const {addNowPlaying} = movieSlice.actions;
export default movieSlice.reducer;
