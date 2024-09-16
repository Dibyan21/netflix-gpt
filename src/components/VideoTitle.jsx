import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white py-2 px-12 text-lg">
          <FontAwesomeIcon icon={faPlay} className="pr-1" />
          Play
        </button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
