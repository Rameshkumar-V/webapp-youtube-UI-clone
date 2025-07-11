import React from 'react';
import { YOUTUBE_CHANNEL_ICON } from '../utils/constants';

const VideoActionBar = ({ channelTitle }) => {
  return (
    <div>
      <div className="flex gap-2 py-1">
        <img
          src={YOUTUBE_CHANNEL_ICON}
          alt="Logo"
          className="h-9 w-9 col-span-1 "
        ></img>
        <div className="col-span-1">
          <h2 className="text-base font-bold">{channelTitle}</h2>
          <h3 className="text-xs text-gray-600">5 Million Subscribers</h3>
        </div>
        <button className="h-9 rounded-full  bg-black hover:bg-opacity-80 text-white px-2 py-0 mt-1 col-span-1">
          {" "}
          Subscribe{" "}
        </button>

        <div className="rounded-full bg-gray-100 w-32  p-1">
          <button className=" inline-block ">
            <img
              className="inline-block ml-2"
              src="https://fonts.gstatic.com/s/i/youtube_outline/thumb_up/v19/24px.svg"
              alt="Share"
            ></img>
            2.2 M
          </button>
          <button className="inline-block ml-2 border-l-gray-800">
       
            <img
              className="inline-block"
              src="https://fonts.gstatic.com/s/i/youtube_outline/thumb_down/v21/24px.svg"
              alt="Dislike"
            ></img>
          </button>
        </div>

        <button className="rounded-full bg-gray-100 px-3 py-1">
          <img
            className="inline-block "
            alt="Share"
            src="https://fonts.gstatic.com/s/i/youtube_outline/share/v10/24px.svg"
          ></img>
          Share
        </button>
      </div>
    </div>
  );
};

export default VideoActionBar;
