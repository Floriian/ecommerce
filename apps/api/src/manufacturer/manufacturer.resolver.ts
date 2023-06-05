import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ManufacturerService } from './manufacturer.service';
import { Manufacturer } from './entities/manufacturer.entity';
import { CreateManufacturerInput } from './dto/create-manufacturer.input';

@Resolver()
export class ManufacturerResolver {
  constructor(private readonly manufacturerService: ManufacturerService) {}

  @Mutation(() => Manufacturer)
  createManufacturer(
    @Args('createManufacturerInput')
    createManufacturerInput: CreateManufacturerInput,
  ) {
    return this.manufacturerService.createManuFacturer(createManufacturerInput);
  }
}
