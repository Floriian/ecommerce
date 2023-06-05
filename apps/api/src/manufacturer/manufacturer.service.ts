import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Manufacturer } from './model/manufacturer.model';
import { Model } from 'mongoose';
import { CreateManufacturerInput } from './dto/create-manufacturer.input';

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectModel(Manufacturer.name)
    private manufacturerModel: Model<Manufacturer>,
  ) {}

  async createManuFacturer(input: CreateManufacturerInput) {
    const { name } = input;
    console.log(name);

    const manufacturer = await this.manufacturerModel.create({
      name,
    });
    await manufacturer.save();
    return manufacturer;
  }
}
