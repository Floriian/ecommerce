import { Manufacturer } from "@ecommerce/types";

export interface Product {
  _id: string;
  name: string;
  productAmount: number;
  price: number;
  image: string;
  manufacturer: Manufacturer;
}
