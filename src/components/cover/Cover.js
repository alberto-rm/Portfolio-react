import React from "react";
import "./Cover.css";
import coverVideo from "../../media/cover-video.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Hi, I'm Alberto Ramirez</h1>
      <p> Developer | Designer | Content Creator </p>
      <div className="cover-more">Learn more about what i do</div>
    </div>
  );
};

export default Cover;
