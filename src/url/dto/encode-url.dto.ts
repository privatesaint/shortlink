import { IsUrl, IsNotEmpty } from 'class-validator';

export class EncodeUrlDto {
  @IsNotEmpty()
  @IsUrl()
  url: string;
}
