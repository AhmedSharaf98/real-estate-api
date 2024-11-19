import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { Listing } from './entities/listing.entity';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Post()
  create(@Body() createDto: CreateListingDto): Listing {
    return this.listingsService.create(createDto as Listing);
  }

  @Get()
  findAll(): Listing[] {
    return this.listingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Listing | undefined {
    return this.listingsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateListingDto): Listing | undefined {
    return this.listingsService.update(+id, updateDto as Listing);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.listingsService.remove(+id);
  }
}