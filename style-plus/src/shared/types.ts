export enum SelectedPage {
  Home = "home",
  About = "about",
  Services = "Services",
  Careers = "Careers",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
