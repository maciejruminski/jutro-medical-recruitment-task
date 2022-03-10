import slideColors from "./slidesColors";

export default function Slide({
  data,
  index,
  activeSlideIndex,
}: {
  data: Slide;
  index: number;
  activeSlideIndex: number;
}): JSX.Element {
  const { iconSrc, iconAlt, title, text, buttonText, mockupSrc, mockupAlt } =
    data;
  const slideColor = slideColors[index];
  const isActive = activeSlideIndex === index ? "opacity-100" : "opacity-0";

  return (
    <div
      className={`${slideColor.bg} ${slideColor.color} absolute top-0 left-0 w-full ${isActive}`}
    >
      <img src={iconSrc} alt={iconAlt} />
      <h2 className="font-bold text-2xl mt-[56px] mb-[22px] md:mb-[33px] md:text-5xl">
        {title}
      </h2>
      <p className="md:text-2xl font-semibold">{text}</p>
      <button
        className={`${slideColor.buttonBg} ${slideColor.buttonColor} py-[8px] px-[16px] rounded-sm mt-[24px] md:mt-[36px]`}
      >
        {buttonText}
      </button>
      <img src={mockupSrc} alt={mockupAlt} />
    </div>
  );
}
