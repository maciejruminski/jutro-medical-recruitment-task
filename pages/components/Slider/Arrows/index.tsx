import { Dispatch, SetStateAction } from "react";

export default function Arrows({
  activeSlideIndex,
  setActiveSlideIndex,
  numberOfSlides,
}: {
  activeSlideIndex: number;
  setActiveSlideIndex: Dispatch<SetStateAction<number>>;
  numberOfSlides: number;
}): JSX.Element {
  const showPrevSlide = () => {
    setActiveSlideIndex(
      activeSlideIndex > 0 ? activeSlideIndex - 1 : numberOfSlides - 1
    );
  };

  const showNextSlide = () => {
    setActiveSlideIndex(
      activeSlideIndex < numberOfSlides - 1 ? activeSlideIndex + 1 : 0
    );
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
