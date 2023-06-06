import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export interface ICreateManufacturerDto {
  name: string;
  image: string;
}
export class CreateManufacturerDto implements ICreateManufacturerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  image: string;
}
