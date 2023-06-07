import { Manufacturer } from "../manufacturer";

export type TProduct = {
  _id: string;
  title: string;
  description: string;
  amount: string;
  image: string;
  price: number;
  manufacturer: Manufacturer;
};

export interface Products {
  products: TProduct[];
}
