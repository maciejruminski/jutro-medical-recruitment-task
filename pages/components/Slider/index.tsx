import Slide from "./Slide";
import sliderData from "./sliderData";

export default function Slider(): JSX.Element {
  return (
    <div>
      {sliderData.map((slide, index) => (
        <Slide data={slide} index={index} key={index} />
      ))}
    </div>
  );
}
