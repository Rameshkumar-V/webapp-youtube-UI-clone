import React from 'react';
import { useSelector } from 'react-redux';
import SuggestionVideoCard from './SuggestionVideoCard';

const SuggestionContainer = () => {
    const videos = useSelector((state) => state.video);  
    return (
      <div >
        
        {
            videos.map((data,key)=>{
               return <SuggestionVideoCard videoData={data}/>
            })
        } 
      </div>
    );
}

export default SuggestionContainer;
