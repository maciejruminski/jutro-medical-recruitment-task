import slidesStyles from "./slidesStyles";

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
}): JSX.Element {
  const { iconSrc, iconAlt, title, text, buttonText, mockupSrc, mockupAlt } =
    data;
  const slideStyles = slidesStyles[index];
  const isActive = activeSlideIndex === index ? "opacity-100" : "opacity-0";

  return (
    <div
      className={`${slideStyles.bg} ${slideStyles.color} absolute top-0 left-0 w-full ${isActive} duration-1000 ease-in-out`}
    >
      <div className="relative overflow-hidden pb-[380px]">
        <div
          className={`p-[48px] duration-1000 ${
            mockupPosition === "bottom" ? "" : "translate-y-[380px]"
          }
          ${mockupPosition === "bottom" ? "pb-0" : "pt-[25px]"}`}
        >
          <img src={iconSrc} alt={iconAlt} />
          <h2 className="font-bold text-2xl mt-[56px] mb-[22px] md:mb-[33px] md:text-5xl">
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
          className={`absolute duration-1000 ${
            mockupPosition === "bottom"
              ? "top-full translate-y-[-380px]"
              : "top-0 translate-y-[calc(-100%+380px)]"
          }`}
        />
      </div>
    </div>
  );
}
