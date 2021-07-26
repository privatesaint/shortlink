import { ApiProperty } from '@nestjs/swagger';
import { IsUrl, IsNotEmpty } from 'class-validator';

export class EncodeUrlDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  url: string;
}
