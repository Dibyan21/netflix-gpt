import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="mt-3 md:mt-0">
        <button className="bg-white text-black py-1 md:py-2 px-6 md:px-12 text-base md:text-lg rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faPlay} className="pr-1" />
          Play
        </button>
        <button className="bg-gray-500 text-white mx-2 py-1 md:py-2 px-6 md:px-12 text-base md:text-lg bg-opacity-50 rounded-lg">
          <FontAwesomeIcon icon={faCircleExclamation} className="pr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
