import React, { useState } from 'react';

const Categories = () => {
  const [Categories, setCategories] = useState([
    "Music",
    "Computer Programming",
    "Podcasts",
    "Mixes",
    "Python",
    "JavaScript",
    "FastAPI Updates",
  ]);
    return (
      <div className="h-18 w-screen flex gap-2  justify-left  py-2 mb-2 border-b border-b-gray-200 overflow-scroll">
        {Categories.map((data, index) => (
          
          <h1 className="rounded-lg bg-gray-100 px-2 py-1 font-medium  text-sm  text-center">
            {data}
          </h1>
        ))}
      </div>
    );
}

export default Categories;
