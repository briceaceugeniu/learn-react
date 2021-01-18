import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className={`item`}
      style={{ cursor: "pointer", display: "flex", marginBottom: "10px" }}
    >
      <img
        className={`ui image`}
        src={video.snippet.thumbnails.default.url}
        alt=""
      />
      <div className="content">
        <div className="header"> {video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
