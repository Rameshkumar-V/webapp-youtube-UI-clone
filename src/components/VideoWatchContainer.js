import React from 'react';
import VideoWatch from './VideoWatch';
import { useSelector } from 'react-redux';


const VideoWatchContainer = () => {

    const videos = useSelector(state=>state.video)
    return (
      <div className="">
        <VideoWatch videoData={videos} />
      </div>
    );
}

export default VideoWatchContainer;
