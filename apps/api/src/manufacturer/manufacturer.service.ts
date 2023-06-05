import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateManufacturerInput } from './dto/create-manufacturer.input';
import { UpdateManufacturerInput } from './dto/update-manufacturer.input';
import { Manufacturer } from './entities/manufacturer.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectModel(Manufacturer.name)
    private manufacturerModel: Model<Manufacturer>,
  ) {}
  async create(
    createManufacturerInput: CreateManufacturerInput,
  ): Promise<Manufacturer> {
    const manufacturer = await this.findOneByName(createManufacturerInput.name);
    if (manufacturer)
      throw new ConflictException('This manufacturer is exists!');

    const createManufacturer = await this.manufacturerModel.create({
      name: createManufacturerInput.name,
    });
    await createManufacturer.save();
    return createManufacturer;
  }

  async findAll(): Promise<Manufacturer[]> {
    return await this.manufacturerModel.find();
  }

  async findOneByName(name: string): Promise<Manufacturer> {
    return await this.manufacturerModel.findOne({ name });
  }

  async findOne(id: string): Promise<Manufacturer> {
    const manufacturer = await this.manufacturerModel.findById(id);
    if (!manufacturer)
      throw new NotFoundException("This manufacturer doesn't exists.");
    return manufacturer;
  }

  async update(
    id: string,
    updateManufacturerInput: UpdateManufacturerInput,
  ): Promise<Manufacturer> {
    await this.findOne(id);

    const updated = await this.manufacturerModel.findByIdAndUpdate(id, {
      $set: {
        name: updateManufacturerInput.name,
      },
    });
    await updated.save();
    return updated;
  }

  async removeManufacturer(id: string): Promise<{ success: boolean }> {
    await this.findOne(id);
    const del = await this.manufacturerModel.deleteOne({ _id: id });
    if (!del) return { success: false };
    return { success: true };
  }
}
