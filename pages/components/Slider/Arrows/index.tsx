import { Dispatch, SetStateAction } from "react";
import slidesStyles from "../Slide/slidesStyles";

export default function Arrows({
  activeSlideIndex,
  setActiveSlideIndex,
  numberOfSlides,
  setMockupPosition,
}: {
  activeSlideIndex: number;
  setActiveSlideIndex: Dispatch<SetStateAction<number>>;
  numberOfSlides: number;
  setMockupPosition: Dispatch<SetStateAction<string>>;
}): JSX.Element {
  const showPrevSlide = () => {
    const activeIndex =
      activeSlideIndex > 0 ? activeSlideIndex - 1 : numberOfSlides - 1;

    setActiveSlideIndex(activeIndex);
    setMockupPosition(slidesStyles[activeIndex].mockupPosition);
  };

  const showNextSlide = () => {
    const activeIndex =
      activeSlideIndex < numberOfSlides - 1 ? activeSlideIndex + 1 : 0;

    setActiveSlideIndex(activeIndex);
    setMockupPosition(slidesStyles[activeIndex].mockupPosition);
  };
  return (
    <>
      <button className="absolute z-10" onClick={showPrevSlide}>
        prev
      </button>
      <button className="absolute z-10 left-20" onClick={showNextSlide}>
        next
      </button>
    </>
  );
}
