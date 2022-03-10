export default function Slide({ data }: { data: Slide }): JSX.Element {
  const { iconSrc, iconAlt, title, text, buttonText, mockupSrc, mockupAlt } =
    data;

  return (
    <div>
      <img src={iconSrc} alt={iconAlt} />
      <h2 className="font-bold text-2xl mt-[56px] mb-[22px] md:mb-[33px] md:text-5xl">
        {title}
      </h2>
      <p className="md:text-2xl font-semibold">{text}</p>
      <button className="bg-black text-white py-[8px] px-[16px] rounded-sm mt-[24px] md:mt-[36px]">
        {buttonText}
      </button>
      <img src={mockupSrc} alt={mockupAlt} />
    </div>
  );
}
