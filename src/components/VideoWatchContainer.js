import React, { useEffect } from 'react';
import VideoWatch from './VideoWatch';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHeaderShow } from '../data/headerSlice';


const VideoWatchContainer = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(toggleHeaderShow());
      
  
    },[])

    const videos = useSelector(state=>state.video)
    return (
      <div className="">
        <VideoWatch videoData={videos} />
      </div>
    );
}

export default VideoWatchContainer;
