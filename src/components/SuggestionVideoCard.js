import React from 'react';

const SuggestionVideoCard = ({videoData}) => {
    const { title = "Untitled", channelTitle = "N/A" } =
      videoData?.snippet || {};

    const { viewCount = 0 } = videoData?.statistics || {};
    const thumbnailURL = videoData.snippet.thumbnails.medium.url || "";
    return (
      <div className="w-full">
        <div className="grid grid-cols-12 p-2">
          <img
            alt="Youtube Video"
            src={
              thumbnailURL ||
              "https://imgs.search.brave.com/h7ZFLO2B1xdug8E7XBJRYzX2s7v_hMANXWcrfAaoLt0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZG9jaGlwby5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDkvWW91VHViZS1C/YW5uZXItSWRlYXMt/QmxvZy1CYW5uZXIu/cG5n"
            }
            className="rounded-lg hover:rounded-none transition-transform col-span-5 aspect-auto"
          ></img>
          <div className="flex col-span-7">
            <div>
              <img
                src="https://imgs.search.brave.com/1-62nbeYiNKpZfEnqgwDp15sHdiDTgz7ZPbLEEeel8Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC83Ny8xMi9o/dW1hbi1saW5lLWlj/b24tdmVjdG9yLTYz/MDc3MTIuanBn"
                alt="Logo"
                className="h-9 w-9"
              ></img>
            </div>
            <div className="flex flex-col">
              <h2
                className="p-1 truncate  font-normal text-pretty text-sm "
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {title}{" "}
              </h2>

              <p className="text-xs text-gray-500 ">{channelTitle}</p>
              <div className="flex gap-2  text-gray-500">
                <p className="text-xs"> ● {viewCount} Views</p>
                <p className="text-xs">4 Days Ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SuggestionVideoCard;
