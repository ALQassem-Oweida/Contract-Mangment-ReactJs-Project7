import React from "react";
import '../App.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed ">
        <iframe className="youtube" title="video player" src={videoSrc} />
      </div>

      <div className="ui segment ">
        <h4 className="title">{video.snippet.title}</h4>
       
      </div>
    </div>
  );
};

export default VideoDetail;
