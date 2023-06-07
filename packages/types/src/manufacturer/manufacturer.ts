import { BaseEntity, BaseQuery } from "..";

export type Manufacturer = BaseEntity & {
  name: string;
};

export interface Manufacturers {
  manufacturers: Manufacturer[];
}
