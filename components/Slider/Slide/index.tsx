import slidesStyles from "./slidesStyles";
import { Dispatch, SetStateAction } from "react";

export default function Slide({
  data,
  index,
  activeSlideIndex,
  mockupPosition,
}: {
  data: Slide;
  index: number;
  activeSlideIndex: number;
  mockupPosition: string;
  sliderHeight: number;
  setSliderHeight: Dispatch<SetStateAction<number>>;
}): JSX.Element {
  const { iconSrc, iconAlt, title, text, buttonText, mockupSrc, mockupAlt } =
    data;
  const slideStyles = slidesStyles[index];
  const isActive =
    activeSlideIndex === index ? "opacity-100 z-10" : "opacity-0 z-0";

  return (
    <div
      aria-hidden={activeSlideIndex === index ? false : true}
      className={`${slideStyles.bg} ${slideStyles.color} absolute top-0 left-0 w-full ${isActive} duration-1000 ease-in-out`}
    >
      <div className="relative overflow-hidden mx-auto pb-[380px] max-w-[1400px] sm:pb-[450px] md:pb-[560px] lg:pb-[660px] xl:pb-0">
        <div
          className={`p-[48px] md:px-[100px] duration-1000 xl:max-w-[750px] xl:py-[170px] 2xl:max-w-[820px] ${
            mockupPosition === "bottom"
              ? "pb-0"
              : "translate-y-[380px] pt-[25px] sm:translate-y-[450px] md:translate-y-[560px] lg:translate-y-[660px] xl:translate-y-0"
          }`}
        >
          <img
            src={iconSrc}
            alt={iconAlt}
            className="h-[80px] sm:h-[100px] md:h-[132px]"
          />
          <h2 className="font-bold text-2xl mt-[42px] mb-[22px] sm:text-4xl md:mb-[33px] md:text-5xl">
            {title}
          </h2>
          <p className="md:text-2xl font-semibold">{text}</p>
          <button
            className={`${slideStyles.buttonBg} ${slideStyles.buttonColor} py-[8px] px-[16px] rounded-sm mt-[24px] md:mt-[36px]`}
          >
            {buttonText}
          </button>
        </div>

        <img
          src={mockupSrc}
          alt={mockupAlt}
          className={`absolute top-0 left-0 duration-1000 w-full max-w-[430px] sm:max-w-[500px] md:max-w-[610px] md:left-[75px] lg:max-w-[710px] xl:left-auto xl:right-0 xl:max-w-[620px] ${
            mockupPosition === "bottom"
              ? "top-full translate-y-[-380px] sm:translate-y-[-450px] md:translate-y-[-560px] lg:translate-y-[-660px] xl:translate-y-[-800px]"
              : "top-0 translate-y-[calc(-100%+380px)] sm:translate-y-[calc(-100%+450px)] md:translate-y-[calc(-100%+560px)] lg:translate-y-[calc(-100%+660px)] xl:translate-y-[calc(-100%+800px)]"
          }`}
        />
      </div>
    </div>
  );
}
