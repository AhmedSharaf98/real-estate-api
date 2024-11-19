import { Injectable } from '@nestjs/common';
import { Listing } from './entities/listing.entity';

@Injectable()
export class ListingsService {
  private listings: Listing[] = [];
  private idCounter = 1;

  create(createDto: Listing): Listing {
    const newListing: Listing = {
      id: this.idCounter++,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...createDto,
    };
    this.listings.push(newListing);
    return newListing;
  }

  findAll(): Listing[] {
    return this.listings;
  }

  findOne(id: number): Listing | undefined {
    return this.listings.find((listing) => listing.id === id);
  }

  update(id: number, updatedData: Listing): Listing | undefined {
    const index = this.listings.findIndex((listing) => listing.id === id);
    if (index === -1) return undefined;
    this.listings[index] = {
      ...this.listings[index],
      ...updatedData,
      updatedAt: new Date(),
    };
    return this.listings[index];
  }

  remove(id: number): boolean {
    const index = this.listings.findIndex((listing) => listing.id === id);
    if (index === -1) return false;
    this.listings.splice(index, 1);
    return true;
  }
}