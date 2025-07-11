import React, { useEffect } from 'react';
import Comments from './Comments';
import SuggestionContainer from './SuggestionContainer';
import { YOUTUBE_CHANNEL_ICON } from '../utils/constants';
import VideoActionBar from './VideoActionBar';
import { useDispatch } from 'react-redux';
import { toggleHeaderShow } from '../data/headerSlice';

const VideoWatch = ({videoData}) => {
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(toggleHeaderShow());
    

  },[])
     const { title = "Untitled", channelTitle = "N/A" } =
       videoData[1]?.snippet || {};
    return (
      <div>
        <div className="w-full h-full grid grid-cols-12 overflow-y-scroll ">
          <div className=" col-span-12 md:col-span-8 px-2 py-1 h-svh overflow-y-scroll scroll-smooth ">
            <iframe
              src="https://www.youtube.com/embed/442ewPgXHQ0?si=FBgQAhyEe9PcKZgI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="aspect-video  rounded-lg  w-full"
            ></iframe>

            <h1 className="font-medium text-pretty text-lg p-1">{title}</h1>

            <VideoActionBar channelTitle={channelTitle} chennelIcon={YOUTUBE_CHANNEL_ICON}/>
            <Comments />
          </div>

          <div className="col-span-12 md:col-span-4 h-svh overflow-y-scroll">
            <h1 className="text-lg">Suggestion Videos</h1>
            <SuggestionContainer />
          </div>
        </div>
      </div>
    );
}

export default VideoWatch;
