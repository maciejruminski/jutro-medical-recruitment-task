import Slide from "./Slide";
import Arrows from "./Arrows";
import sliderData from "./sliderData";
import slidesStyles from "./Slide/slidesStyles";

import { useState } from "react";

export default function Slider(): JSX.Element {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [mockupPosition, setMockupPosition] = useState(
    slidesStyles[0].mockupPosition
  );

  return (
    <div className="relative">
      <Arrows
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
        numberOfSlides={sliderData.length}
        setMockupPosition={setMockupPosition}
      />

      {sliderData.map((slide, index) => (
        <Slide
          data={slide}
          index={index}
          activeSlideIndex={activeSlideIndex}
          mockupPosition={mockupPosition}
          key={index}
        />
      ))}
    </div>
  );
}
