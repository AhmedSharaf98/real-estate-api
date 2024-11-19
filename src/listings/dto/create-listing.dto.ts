import { IsString, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateListingDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  price: number;

  @IsString()
  location: string;
}