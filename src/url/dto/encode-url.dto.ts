import { IsUrl, IsNotEmpty } from 'class-validator';

export class EncodeUrlDto {
  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  url: string;
}
