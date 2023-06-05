import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export interface ICreateProductDto {
  title: string;
  image: string;
  description: string;
  amount: number;
}

export class CreateProductDto implements ICreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  image: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
