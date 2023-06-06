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

  /**
   *
   * @param createManufacturerInput Data from incoming request.
   * @returns Manufacturer
   */
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

  /**
   * It finds all Manufacturers in db.
   * @returns Array<Manufacturer>
   */
  async findAll(): Promise<Manufacturer[]> {
    return await this.manufacturerModel.find();
  }

  /**
   * Find a manufacturer by name in database.
   * @param name Manufacturer name
   * @returns Manufacturer
   */
  async findOneByName(name: string): Promise<Manufacturer> {
    return await this.manufacturerModel.findOne({ name });
  }

  /**
   * Find a manufacturer by ID in database.
   * @param id Manufacturer ID
   * @returns Manufacturer
   */

  async findOne(id: string): Promise<Manufacturer> {
    const manufacturer = await this.manufacturerModel.findById(id);
    if (!manufacturer)
      throw new NotFoundException("This manufacturer doesn't exists.");
    return manufacturer;
  }
  /**
   * It updates a manufacturer by ID.
   * @param id Manufacturer ID
   * @param updateManufacturerInput Incoming request
   * @returns Manufacturer
   */

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

  /**
   * It removes a manufacturer from database. Doesn't include the products.
   * @param id Manufacturer ID
   * @returns boolean
   */

  async removeManufacturer(id: string): Promise<{ success: boolean }> {
    await this.findOne(id);
    const del = await this.manufacturerModel.deleteOne({ _id: id });
    if (!del) return { success: false };
    return { success: true };
  }
}
