type Slide = {
  title: string;
  text: string;
  buttonText: string;
  iconSrc: string;
  iconAlt: string;
  mockupSrc: string;
  mockupAlt: string;
};

type SliderData = Slide[];

type SlideStyles = {
  bg: string;
  color: string;
  buttonBg: string;
  buttonColor: string;
  mockupPosition: string;
};

type SlidesStyles = SlideStyles[];
