import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-12 text-lg rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faPlay} className="pr-1" />
          Play
        </button>
        <button className="bg-gray-500 text-white mx-2 py-2 px-12 text-lg bg-opacity-50 rounded-lg">
          <FontAwesomeIcon icon={faCircleExclamation} className="pr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
