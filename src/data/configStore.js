import { configureStore } from '@reduxjs/toolkit'
import headerSlice  from './headerSlice'
import  searchForSuggestionSlice  from './searchForSuggestion'
import  VideoSlice  from './VideoSlice'
export default configureStore({
  reducer: {
    header: headerSlice,
    search: searchForSuggestionSlice,
    video: VideoSlice
  },
});