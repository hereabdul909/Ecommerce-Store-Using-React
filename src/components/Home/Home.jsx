import React, { useState, useEffect } from "react";
import OneImage from "./OneImage";
import Links from '../PlayStore/Links'
import {
  Slider,
  SliderSection,
  Slide,
  Circle,
  CircleContainer,
} from "./StyledHome";
import Sliderdata from "./SliderData";
function Home({ slides }) {
  const [current, setcurrent] = useState(0);
  const Length = slides.length;
  const intervalTime = 3000;
  let slideInterval;
  const nextSlide = () => {
    setcurrent(current === Length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setcurrent(current === 0 ? Length - 1 : current - 1);
  };
  const startSlide = () => {
    slideInterval = setInterval(() => {
      nextSlide();
    }, intervalTime);
  };
  const stopSlide = () => {
    clearInterval(slideInterval);
  };
  useEffect(() => {
    startSlide();

    return () => {
      stopSlide();
    };
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <SliderSection>
        <div className="prev" onClick={prevSlide}>
          &#10094;
        </div>
        <Slider>
          {Sliderdata.map((item, index) => {
            return (
              <Slide key={index} >
                {index === current && <img src={item.image} />}
              </Slide>
            );
          })}
        </Slider>
        <div className="next" onClick={nextSlide}>
          &#10095;
        </div>
      </SliderSection>
      <CircleContainer>
        {Sliderdata.map((_, index) => (
          <Circle
            key={index}
            onClick={() => setcurrent(index)}
            active={index === current}
          />
        ))}
      </CircleContainer>
      <OneImage />
      <Links/>
    </>
  );
}
export default Home;
