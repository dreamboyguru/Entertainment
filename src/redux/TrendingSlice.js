import { createSlice } from "@reduxjs/toolkit"

const TrendingSlice = createSlice({
    name: "trending",
    initialState: {
        trending: []
    },
    reducers: {
        getTrending: (state, action) => {
            state.trending = action.payload.map(video => {
                return {
                    id: video._id,
                    url_video_id: video.id, 
                    type: video.type, 
                    original_title: video.original_title, 
                    overview: video.overview,
                    genre_ids: video.genre_ids,
                    original_language: video.original_language,
                    release_date: video.release_date,
                    adult: video.adult,
                    actors: video.actors,
                    poster_path : video.poster_path,
                    backdrop_path: video.backdrop_path,
                    trailer: video.trailer,
                    video: video.video,
                    joinedData: video.joinedData
                }
            })
        }
    }
})

export const {getTrending} = TrendingSlice.actions;
export default TrendingSlice.reducer;
