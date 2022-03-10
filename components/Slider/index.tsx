import Slide from "./Slide";
import Arrows from "./Arrows";
import sliderData from "./sliderData";
import slidesStyles from "./Slide/slidesStyles";

import { useEffect, useState, useRef } from "react";

const slidesHeights: number[] = [];

export default function Slider(): JSX.Element {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [mockupPosition, setMockupPosition] = useState(
    slidesStyles[0].mockupPosition
  );
  const [sliderHeight, setSliderHeight] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Create an array with slides heights.
  useEffect(() => {
    if (sliderRef.current) {
      const slides = sliderRef.current.children;

      for (let i = 0; i < slides.length; i++) {
        slidesHeights.push(slides[i].clientHeight);
      }
    }
  }, []);

  // Change the slider height based on active slide.
  useEffect(
    () => setSliderHeight(slidesHeights[activeSlideIndex]),
    [activeSlideIndex]
  );

  return (
    <div
      className={`relative duration-1000 ease-in-out`}
      style={{ height: `${sliderHeight}px` }}
    >
      <Arrows
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
        numberOfSlides={sliderData.length}
        setMockupPosition={setMockupPosition}
      />

      <div ref={sliderRef}>
        {sliderData.map((slide, index) => (
          <Slide
            data={slide}
            index={index}
            activeSlideIndex={activeSlideIndex}
            mockupPosition={mockupPosition}
            key={index}
            sliderHeight={sliderHeight}
            setSliderHeight={setSliderHeight}
          />
        ))}
      </div>
    </div>
  );
}
