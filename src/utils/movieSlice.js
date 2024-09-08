import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
       nowPlaying: null,
       trending: null,
       popular:null,
       popularTv:null,
       topRated:null,
       topRatedTv:null,
       video: null
    },
    reducers: {
        addNowPlaying: (state, action) =>{
            state.nowPlaying=action.payload;
        },
        addTrending: (state, action) =>{
            state.trending=action.payload;
        },
        addPopular: (state, action) =>{
            state.popular=action.payload;
        },
        addPopularTv: (state, action) =>{
            state.popularTv=action.payload;
        },
        addTopRated: (state, action) =>{
            state.topRated=action.payload;
        },
        addTopRatedTv: (state, action) =>{
            state.topRatedTv=action.payload;
        },
        addVideo: (state, action) =>{
            state.video=action.payload;
        },
    },
});


export const {addNowPlaying, addTrending, addVideo, addPopular, addPopularTv, addTopRated, addTopRatedTv} = movieSlice.actions;
export default movieSlice.reducer;
