import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ManufacturerService } from './manufacturer.service';
import { Manufacturer } from './entities/manufacturer.entity';
import { CreateManufacturerInput } from './dto/create-manufacturer.input';
import { UpdateManufacturerInput } from './dto/update-manufacturer.input';

@Resolver(() => Manufacturer)
export class ManufacturerResolver {
  constructor(private readonly manufacturerService: ManufacturerService) {}

  /**
   * It handle 'create' method.
   * @param createManufacturerInput Incoming request
   * @returns Manufacturer
   */
  @Mutation(() => Manufacturer)
  createManufacturer(
    @Args('createManufacturerInput')
    createManufacturerInput: CreateManufacturerInput,
  ) {
    return this.manufacturerService.create(createManufacturerInput);
  }
  /**
   * Query database to find all manufacturers.
   * @returns Manufacturer[]
   */

  @Query(() => [Manufacturer], { name: 'manufacturers' })
  findAll() {
    return this.manufacturerService.findAll();
  }

  /**
   * Get one manufacturer by ID.
   * @param id Manufacturer ID
   * @returns Manufacturer
   */

  @Query(() => Manufacturer, { name: 'manufacturer' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.manufacturerService.findOne(id);
  }

  /**
   * Get one manufacturer by name.
   * @param name Manufacturer name
   * @returns Manufacturer
   */

  @Query(() => Manufacturer, { name: 'manufacturer' })
  findOneByName(@Args('name', { type: () => String }) name: string) {
    return this.manufacturerService.findOneByName(name);
  }

  /**
   * It updates a manufacturer by ID
   * @param updateManufacturerInput Incoming request
   * @returns Manufacturer
   */
  @Mutation(() => Manufacturer)
  updateManufacturer(
    @Args('updateManufacturerInput')
    updateManufacturerInput: UpdateManufacturerInput,
  ) {
    return this.manufacturerService.update(
      updateManufacturerInput.id,
      updateManufacturerInput,
    );
  }

  /**
   * It deletes a manufacturer by ID. Doesn't include manufacturer products.
   * @param id Manufacturer ID
   * @returns { success: boolean }
   */

  @Mutation(() => Manufacturer)
  removeManufacturer(@Args('id', { type: () => String }) id: string) {
    return this.manufacturerService.removeManufacturer(id);
  }
}
