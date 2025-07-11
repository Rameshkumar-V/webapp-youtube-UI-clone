import React, { useEffect } from 'react'
import Categories from './Categories'
import VideoCard from './VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import { addVideoData } from '../data/VideoSlice';
import { datas } from '../data/maindata';
import { Link } from 'react-router-dom';

function MainContainer() {
  const dispatch = useDispatch();
  const videoData = useSelector(state=>state.video);
  useEffect(() => {

    // fetch(YOUTUBE_VIDEOS_API).then(data=>data.json())
    // .then((d)=>{
    //   console.log(JSON.stringify(d))
    //   alert(d)
    // })
    dispatch(addVideoData(datas.items));

    
    
    
  }, []);
  return (
    <>
      <div className="p-1 ">
        <Categories />

        <div className=" md:h-screen h-max flex flex-wrap justify-center overflow-scroll border  ">
          {videoData?.map((data) => (
        
            <Link to={'/watch'}>
              <VideoCard videoData={data} />
            </Link>
          ))}
         
        </div>
      </div>
    </>
  );
}

export default MainContainer