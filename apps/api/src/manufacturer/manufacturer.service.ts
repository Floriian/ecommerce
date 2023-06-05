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

  findOne(id: number) {
    return `This action returns a #${id} manufacturer`;
  }

  update(id: string, updateManufacturerInput: UpdateManufacturerInput) {
    return `This action updates a #${id} manufacturer`;
  }

  remove(id: number) {
    return `This action removes a #${id} manufacturer`;
  }
}
