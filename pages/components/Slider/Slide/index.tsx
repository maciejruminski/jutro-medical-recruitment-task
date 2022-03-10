export default function Slide({ data }: { data: Slide }): JSX.Element {
  const { iconSrc, iconAlt, title, text, buttonText, mockupSrc, mockupAlt } =
    data;

  return (
    <div>
      <img src={iconSrc} alt={iconAlt} />
      <h2>{title}</h2>
      <p>{text}</p>
      <button>{buttonText}</button>
      <img src={mockupSrc} alt={mockupAlt} />
    </div>
  );
}
