import React from 'react';
import { YOUTUBE_CHANNEL_ICON } from '../utils/constants';

const VideoCard = ({ videoData }) => {
  const {
    title = "Untitled",
    channelTitle = "N/A",
   
  } = videoData?.snippet || {};

  const { viewCount=0 } = videoData?.statistics || {};
  const thumbnailURL = videoData.snippet.thumbnails.medium.url || '';

  return (
    <div className="md:w-72  w-full  p-1 flex flex-col justify-center">
      <img
        alt="Youtube Video"
        src={
          thumbnailURL ||
          "https://imgs.search.brave.com/h7ZFLO2B1xdug8E7XBJRYzX2s7v_hMANXWcrfAaoLt0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZG9jaGlwby5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDkvWW91VHViZS1C/YW5uZXItSWRlYXMt/QmxvZy1CYW5uZXIu/cG5n"
        }
        className='rounded-lg hover:rounded-none transition-transform '
      ></img>
      <div className="flex">
        
          <img
            src={YOUTUBE_CHANNEL_ICON}
            alt="Logo"
            className="aspect-square  h-14 md:h-[40px]"
          ></img>
        
        <div className="max-w-[80%]">
          <h2 className="p-1 text-wrap text-md md:text-sm overflow-hidden font-bold  md:w-auto min-w-full">
            {title}{" "}
          </h2>

          <div className="flex gap-2 text-gray-500">
            <p className="text-xs  ">{channelTitle}</p>
            <p className="text-xs"> ● {viewCount} Views</p>
            <p className="text-xs">4 Days Ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
