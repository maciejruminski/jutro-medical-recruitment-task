import Slide from "./Slide";
import Arrows from "./Arrows";
import sliderData from "./sliderData";

import { useState } from "react";

export default function Slider(): JSX.Element {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="relative">
      <Arrows
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
        numberOfSlides={sliderData.length}
      />

      {sliderData.map((slide, index) => (
        <Slide
          data={slide}
          index={index}
          activeSlideIndex={activeSlideIndex}
          key={index}
        />
      ))}
    </div>
  );
}
