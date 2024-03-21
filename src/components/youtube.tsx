"use client";
import React from "react";

const YouTubeVideo: React.FC = () => {
  return (
    <div className="video-container">
      <iframe
        className="lg:w-[50vw] lg:h-[40vh] w-[65vw] h-[20vh]"
        src="https://www.youtube.com/embed/9BhQFRm4Mew"
        title="PT Multi Daya Sinergi Bersama"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
