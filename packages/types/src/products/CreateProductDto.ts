import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export interface ICreateProductDto {
  title: string;
  image: string;
  description: string;
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
}
