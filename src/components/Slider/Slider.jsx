import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.scss";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>
      <Carousel
        plugins={[
          "centered",
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
        slidesPerPages={3}
        infinite
        animationSpeed={200}
        offset={5}
        // itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Slider;
