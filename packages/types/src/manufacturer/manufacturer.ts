import { BaseQuery } from "..";

type TManufacturer = {
  _id: string;
  name: string;
};

export interface Manufacturer {
  manufacturers: TManufacturer[];
}
