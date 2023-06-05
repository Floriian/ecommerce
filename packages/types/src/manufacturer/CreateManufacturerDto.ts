import { IsNotEmpty, IsString } from "class-validator";

export interface ICreateManufacturerDto {
  name: string;
}
export class CreateManuFacturerDto implements ICreateManufacturerDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
