import { createSlice } from "@reduxjs/toolkit";

export const VideoSlice = createSlice({
  name: "video",
  initialState: [],
  reducers: {
    addVideoData: (state,actions) => {
      return state.concat(actions.payload);
    }
  },
});

export const { addVideoData } = VideoSlice.actions;
export default VideoSlice.reducer;
