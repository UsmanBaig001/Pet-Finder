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
