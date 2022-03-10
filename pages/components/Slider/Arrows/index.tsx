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
      <button className="absolute top-1/2 z-30" onClick={showPrevSlide}>
        <svg
          width="11"
          height="17"
          viewBox="0 0 11 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.71355 15.5486L0.902832 8.50001L9.71355 1.45143"
            stroke="white"
            stroke-width="1.54188"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button className="absolute top-1/2 z-30 left-20" onClick={showNextSlide}>
        <svg
          width="11"
          height="17"
          viewBox="0 0 11 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.808542 15.5486L9.61926 8.50001L0.808542 1.45143"
            stroke="white"
            stroke-width="1.54188"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
