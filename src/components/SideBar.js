import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function SideBar() {
  const isShow = useSelector(state=>state.header)
  const [links, setLinks] = useState([
    {
      title: "",
      data: [
        {
          title: "Home",
          icon: "https://fonts.gstatic.com/s/i/youtube_fill/home/v9/24px.svg",
        },
        {
          title: "Shorts",
          icon: "https://fonts.gstatic.com/s/i/youtube_fill/youtube_shorts/v10/24px.svg",
        },
        {
          title: "Subscriptions",
          icon: "https://fonts.gstatic.com/s/i/youtube_fill/subscriptions_cairo/v2/24px.svg",
        },
        {
          title: "you",
          icon: "https://fonts.gstatic.com/s/i/materialicons/person/v14/24px.svg",
        },
      ],
    },
  ]);
 
  if(!isShow.isShow)return null;
  return (
    <div
      className=" fixed w-full h-14  bottom-0  md:p-1 bg-white
    md:relative  md:block  md:w-20  md:h-screen shadow-lg  "
    >
      {links.map((data, key) => {
        return (
          <>
            <h3 className="text-md p-1">{data?.title} </h3>
            <ul key={key} className="flex md:block flex-row justify-between  ">
              {data.data.map((data, key) => (
                <Link to={"/"}>
                  <li
                    key={key}
                    className=" px-6 md:py-4  
                   flex flex-col justify-center items-center 
                    rounded-lg hover:bg-gray-200  
                   "
                  >
                    {data?.icon && (
                      <img
                        src={data?.icon}
                        alt=" Logo"
                        style={{ width: "24px", height: "24px" }}
                      />
                    )}

                    <h2 className="md:text-xs font-bold text-center text-gray-800 cursor-pointer">
                      {data?.title}
                    </h2>
                  </li>
                </Link>
              ))}
            </ul>
          </>
        );
      })}
    </div>
  );
}

export default SideBar