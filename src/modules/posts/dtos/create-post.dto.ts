import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: false })
  @IsUrl()
  image_url?: string;

  @ApiProperty()
  @IsString()
  hashtags?: string;
}
