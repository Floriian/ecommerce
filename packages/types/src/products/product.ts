import { BaseEntity } from "..";
import { Manufacturer } from "../manufacturer";

export type TProduct = BaseEntity & {
  title: string;
  description: string;
  amount: number;
  image: string;
  price: number;
  manufacturer: Manufacturer;
};

export interface Products {
  products: TProduct[];
}
