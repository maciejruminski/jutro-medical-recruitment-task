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
    <div className="max-w-[1700px] w-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-30 absolute">
      <button
        className="absolute left-[10px] md:left-[40px] xl:left-[30px] 2xl-[100px]"
        onClick={showPrevSlide}
      >
        <svg
          className="w-[14px] h-auto md:w-[18px]"
          viewBox="0 0 11 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${slidesStyles[activeSlideIndex].arrowColor}`}
            d="M9.71355 15.5486L0.902832 8.50001L9.71355 1.45143"
            stroke-width="1.54188"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        className="absolute right-[10px] md:right-[40px] xl:right-[30px] 2xl-[100px]"
        onClick={showNextSlide}
      >
        <svg
          className="w-[14px] h-auto md:w-[18px]"
          viewBox="0 0 11 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.808542 15.5486L9.61926 8.50001L0.808542 1.45143"
            className={`${slidesStyles[activeSlideIndex].arrowColor}`}
            stroke-width="1.54188"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
