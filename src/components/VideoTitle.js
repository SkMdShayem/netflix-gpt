import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent">
      <div className="absolute top-1/4 left-10 md:left-20 px-4 py-2">
        <h1 className="text-2xl md:text-5xl font-bold text-white">{title}</h1>
        <p className="hidden md:inline-block mt-4 text-white w-1/3">
          {overview}
        </p>
        <div>
          <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            ▶ Play
          </button>
          <button className="mt-6 ml-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
