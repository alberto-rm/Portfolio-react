import React from "react";
import emoji from "../../media/emoji.png";
import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sunt
          veniam illo cumque provident fugit vel fugiat aspernatur voluptatibus,
          minus natus eum. Provident expedita consequatur unde tempore earum
          neque ex.
        </p>
      </div>
      <div className="about-img">
        <img src={emoji} alt="about" />
      </div>
    </div>
  );
};
export default About;
