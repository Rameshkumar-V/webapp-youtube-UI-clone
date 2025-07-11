import React, { useEffect, useState } from 'react'
import { hambburgerMenuURL, userIcon, youtubeURL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHeaderShow } from '../data/headerSlice'
import {addSuggestion} from '../data/searchForSuggestion'

export default function Header() {
  const dispatch = useDispatch();
  const searchSuggestionCacheData = useSelector(state=>state.search)
  const [searchQuery, setSearchQuery] = useState('');
  const [isSuggesstionShow, setIsSuggesstionShow] = useState(false);
  const [suggestionData, setSuggestionData] = useState([]);
  
  const searchAPI = () =>{
       fetch(
         `https://api.allorigins.win/get?url=${encodeURIComponent(
           "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchQuery
         )}`
       )
         .then((res) => res.json())
         .then((data) => {
           const parsed = JSON.parse(data.contents);
           console.log(parsed[1]); // suggestions
           setSuggestionData(parsed[1])
           dispatch(
             addSuggestion({
               [searchQuery]: parsed[1],
             })
           );
     
           
         }).catch(()=>{});

  }

  useEffect(() => {
    // DEBOUNCING IMPLEMENTED
 

    
    const timeout = setTimeout(() => {
      // Caching to Reduce API calls.
      const suggestionCache=searchSuggestionCacheData[searchQuery];
      
      if (suggestionCache) {
        setSuggestionData(suggestionCache);
      
      } else {
        searchAPI();
      } 
      
      // alert("search" + searchQuery);
    }, 200);

    return () => {
      // NOTE : This function executed on Unmound of this component
      clearTimeout(timeout);
    };
  }, [searchQuery]);
  return (
    <div className="grid grid-flow-col w-full px-4 py-2 items-center">
      <div className="flex col-span-1 gap-2">
        <button
          className="h-6 w-10"
          onClick={() => dispatch(toggleHeaderShow())}
        >
          <img src={hambburgerMenuURL} alt="Menu"></img>
        </button>
        <img alt="Youtube" src={youtubeURL} className=" h-8 w-15"></img>
      </div>

      <div className="col-span-10 text-center ">
        <div className="flex justify-center items-center ">
          <input
            type="text"
            className="border border-gray-300 w-1/2 py-2 rounded-l-full pl-2"
            onChange={(d) => setSearchQuery(d.target.value)}
            onFocus={() => setIsSuggesstionShow(true)}
            onBlur={() => setIsSuggesstionShow(false)}
          ></input>
          <button className="border border-gray-300 rounded-r-full px-4 py-2  bg-gray-200">
            <img
              src="https://fonts.gstatic.com/s/i/youtube_outline/search_cairo/v2/24px.svg"
              alt="Search"
              className=" "
            ></img>
          </button>

          {isSuggesstionShow && (
            <div className="bg-white absolute top-20 rounded-lg border border-gray-500 text-left  w-1/2 p-1">
              {suggestionData&&
              <ul className=" ">
                {suggestionData?.map((data, key) => {
                  return (
                    <li key={key} className="hover:bg-gray-100 px-4 py-2">
                      {" "}
                      <img
                        src="https://fonts.gstatic.com/s/i/youtube_outline/search_cairo/v2/24px.svg"
                        alt="Search"
                        className="h-4 inline-block m-1 "
                      ></img>
                      {data}
                    </li>
                  );
                })}
              </ul>}
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <button>
          <img alt="Icon" src={userIcon} className="h-12 w-12"></img>
        </button>
      </div>
    </div>
  );
}
