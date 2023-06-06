import { BaseQuery } from "..";

export type Manufacturer = {
  _id: string;
  name: string;
};

export interface Manufacturers {
  manufacturers: Manufacturer[];
}
