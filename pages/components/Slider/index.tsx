import Slide from "./Slide";

export default function Slider(): JSX.Element {
  const slidesData: SliderData = [
    {
      title: "Pobierz aplikację",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdumtellus elit sed risus.",
      buttonText: "Pobierz aplikację",
      iconSrc: "/images/icons/icon-1.svg",
      iconAlt: "lorem ipsum",
      mockupSrc: "/images/mockups/mockup-1.png",
      mockupAlt: "lorem ipsum",
    },
    {
      title: "Porozmawiaj z lekarzem",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdumtellus elit sed risus.",
      buttonText: "Pobierz aplikację",
      iconSrc: "/images/icons/icon-2.svg",
      iconAlt: "lorem ipsum",
      mockupSrc: "/images/mockups/mockup-2.png",
      mockupAlt: "lorem ipsum",
    },
    {
      title: "Otrzymaj receptę",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdumtellus elit sed risus.",
      buttonText: "Pobierz aplikację",
      iconSrc: "/images/icons/icon-3.svg",
      iconAlt: "lorem ipsum",
      mockupSrc: "/images/mockups/mockup-3.png",
      mockupAlt: "lorem ipsum",
    },
  ];

  return (
    <div>
      {slidesData.map((slide, index) => (
        <Slide data={slide} key={index} />
      ))}
    </div>
  );
}
