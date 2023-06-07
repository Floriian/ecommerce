import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
} from "class-validator";
import { TProduct } from "../products";
import { Order } from "./order";

export class CreateOrderDto implements Omit<Order, "_id"> {
  @IsNotEmpty()
  @IsNumber()
  totalPrice: number;

  @IsNotEmpty()
  @IsDate()
  orderCreatedAt: Date;

  @IsNotEmpty()
  @IsBoolean()
  orderAccepted: boolean;

  @IsNotEmpty()
  @IsArray()
  products: TProduct[];
}
