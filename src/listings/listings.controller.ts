import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from './entities/listing.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('listings')
@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @ApiOperation({ summary: 'Create a new listing' })
  @ApiResponse({ status: 201, description: 'The listing has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Validation failed.' })
  @Post()
  create(@Body() createDto: CreateListingDto): Listing {
    return this.listingsService.create(createDto as Listing);
  }

  @ApiOperation({ summary: 'Retrieve all listings' })
  @ApiResponse({ status: 200, description: 'List of real estate listings.' })
  @Get()
  findAll(): Listing[] {
    return this.listingsService.findAll();
  }

  @ApiOperation({ summary: 'Retrieve a specific listing by ID' })
  @ApiResponse({ status: 200, description: 'Details of the requested listing.' })
  @ApiResponse({ status: 404, description: 'Listing not found.' })
  @Get(':id')
  findOne(@Param('id') id: string): Listing | undefined {
    return this.listingsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update an existing listing' })
  @ApiResponse({ status: 200, description: 'The listing has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Listing not found.' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateListingDto): Listing | undefined {
    return this.listingsService.update(+id, updateDto as Listing);
  }

  @ApiOperation({ summary: 'Delete a listing' })
  @ApiResponse({ status: 200, description: 'The listing has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Listing not found.' })
  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.listingsService.remove(+id);
  }
}