import { BaseEntity } from "..";
import { TProduct } from "../products";

export interface Order extends BaseEntity {
  totalPrice: number;
  orderCreatedAt: Date;
  orderAccepted: boolean;
  products: TProduct[];
}
