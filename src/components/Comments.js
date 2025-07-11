import React from 'react';
import { YOUTUBE_CHANNEL_ICON } from '../utils/constants';


const comments = [
  {
    user: "Balaji",
    comment: "Hi there its a use full video thats very helpfull us.",
  },
  {
    user: "Ananth",
    comment: "Hi there its a use full video thats very helpfull us.",
  },
  {
    user: "Tamil Selvan",
    comment: "Hi there its a use full video thats very helpfull us.",
  },
  {
    user: "GnanasKandhan",
    comment: "Hi there its a use full video thats very helpfull us.",
  },
  {
    user: "Manoj",
    comment:
      "hi hello its a fantastic show i think really good hi hello its a fantastic show i think really good hi hello its a fantastic show ithink really good hi hello its a fantastic show i think reallygood hi hello its a fantastic show i think really good hi helloits a fantastic show i think really good",
  },
];



const Comments = () => {
    return (
      <div className="p-2 w-full bg-gray-50 border border-black rounded">
        <h1 className="text-lg font-medium">Comments</h1>

        {comments.map((data, key) => {
          return (
            <div className="flex items-start p-2">
              <img
                src={YOUTUBE_CHANNEL_ICON}
                alt="logo"
                className="h-6 rounded-full"
              ></img>
              <div className=" flex flex-col">
                <h2 className=" px-2 text-gray-900 font-medium">{data.user}</h2>
                <p className="px-2 py-1 text-pretty text-sm text-gray-800 ">
                  {data.comment}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default Comments;
