import { Manufacturer } from "../manufacturer";

export type TProduct = {
  title: string;
  description: string;
  amount: string;
  image: string;
  manufacturer: Manufacturer;
};

export interface Products {
  products: TProduct[];
}
