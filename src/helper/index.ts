import cuteDog from "../assets/images/CuteDog.png";
import cuteCat from "../assets/images/CuteKitten.png";
import kitten from "../assets/images/Kitten.png";
import iconFacebook from "../assets/images/IconFacebook.png";
import iconInstagram from "../assets/images/IconInstagram.png";
import iconTwitter from "../assets/images/IconTwitter.png";
import iconYoutube from "../assets/images/IconYouTube.png";
import iconPinterest from "../assets/images/IconPinterest.svg";
import Logo from "../assets/images/logoConsumerWhite.svg";
import arrowWhite from "../assets/images/ArrowWhite.svg";
import FootLabel from "../assets/images/Vector_4.png";
import FootLabel1 from "../assets/images/Vector.png";
import FootLabel2 from "../assets/images/Vector_3.svg";
import logo from "../assets/images/logo.svg";
import toggler from "../assets/images/IconMenu.svg";
import heartIcon from "../assets/images/IconFavorit.svg";
import heartIcon1 from "../assets/images/IconFavorite.svg";
import PinkArrow from "../assets/images/PinkArrow.svg";
import searchIcon from "../assets/images/IconSearch.svg";
import heroImage2 from "../assets/images/MainSection.svg";
import iconShelter from "../assets/images/IconSheltersRescues.svg";
import iconCat from "../assets/images/SVG_2.svg";
import iconDog from "../assets/images/SVG_3.svg";
import iconPaw from "../assets/images/SVG_1.svg";
import iconStrokedPaw from "../assets/images/IconStrokedPaw.png";
import iconFavorite2 from "../assets/images/IconFavorite2.svg";
import alternate from "../assets/images/Alternate.png";
import iconHealth from "../assets/images/HealthOutline.svg";
import iconRight from "../assets/images/IconRightBlack.svg";
import iconBell from "../assets/images/IconAlert.svg";
import iconHeart from "../assets/images/icon-favorite_outline.svg";
import iconShelterOutline from "../assets/images/IconShelterOutline.svg";
import iconLocation from "../assets/images/IconLocation.svg";
import iconPhone from "../assets/images/IconPhone.svg";
import iconFavorite3 from "../assets/images/icon-favorite_outline2.svg";
import iconRight2 from "../assets/images/IconRightPurple.png";

export {
  cuteDog,
  cuteCat,
  kitten,
  iconFacebook,
  iconInstagram,
  iconTwitter,
  iconYoutube,
  iconPinterest,
  Logo,
  arrowWhite,
  FootLabel,
  FootLabel1,
  FootLabel2,
  logo,
  toggler,
  heartIcon,
  heartIcon1,
  PinkArrow,
  searchIcon,
  heroImage2,
  iconShelter,
  iconCat,
  iconDog,
  iconPaw,
  iconStrokedPaw,
  iconFavorite2,
  alternate,
  iconHealth,
  iconRight,
  iconBell,
  iconHeart,
  iconShelterOutline,
  iconLocation,
  iconPhone,
  iconFavorite3,
  iconRight2,
};

export type Photos = {
  small: string;
  medium: string;
  large: string;
  full: string;
};
export type address = {
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  postcode: number;
  status: string;
};
export type Contact = {
  email: string;
  phone: number;
  address: address;
};
export type Colors = {
  primary: string | null;
  secondary: string | null;
  tertiary: string | null;
};
export type Breeds = {
  mixed: boolean;
  primary: string;
  secondary: string;
  unknown: boolean;
};
export interface animal {
  age: string;
  gender: string;
  name: string;
  description: string;
  contact: Contact;
  photos: Photos[];
  status: string;
  species: string;
  size: string;
  type: string;
  colors: Colors;
  coat: string;
  breeds: Breeds;
  address: address;
  url: string;
  organization_id: string;
  id: number;
}
export type Response = {
  name: string;
  image_url: string;
  age: string;
  description: string;
  type: string;
  photos: Photos[];
  id: string;
};
export const footList_1 = [
  "FAQs",
  "Mobile App Download",
  "Partnerships",
  "News Center",
  "Put Petfinder On Your Site",
  "For Developers",
  "Contact Us",
];
export const footList_2 = [
  "All Adopt or Get Involved",
  " Adopting Pets",
  " Animal Shelters & Rescues",
  "Other Types of Pets",
];
export const footList_3 = [
  "All About Dogs & Puppies",
  "Dog Adoption",
  "Dog Breeds",
  " Feeding Your Dog",
  "Dog Behavior",
  " Dog Health & Wellness",
  "Dog Training",
  "Other Dog Information",
];
export const footList_4 = [
  "All About Cats & Kittens",
  "Cat Adoption",
  "Cat Breeds",
  " Feeding Your Cat",
  "Cat Behavior",
  " Cat Health & Wellness",
  "Cat Training",
  "Other Cat Information",
];
export const footLinks = [
  " Shelter & Rescue Registration",
  "Sitemap",
  "Terms of Service",
  "Notice at Collection",
  "Privacy Policy ( updated )",
  "About Our Ads",
  "Do Not Sell Or Share My Personal Information",
  "Accessibility",
];
