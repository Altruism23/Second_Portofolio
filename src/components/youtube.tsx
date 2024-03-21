"use client";
import React from "react";

const YouTubeVideo: React.FC = () => {
  return (
    <div className="video-container">
      <iframe
        className="w-[600px] h-[400px] max-md:w-[400px] max-md:h-[200px]"
        src="https://www.youtube.com/embed/9BhQFRm4Mew"
        title="PT Multi Daya Sinergi Bersama"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
