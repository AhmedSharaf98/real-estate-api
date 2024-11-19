import { IsString, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateListingDto {
  @ApiProperty({ description: 'The title of the real estate listing' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'A detailed description of the listing' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'The price of the property', example: 10000 })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'The location of the property', example: "New Cairo" })
  @IsString()
  location: string;
}