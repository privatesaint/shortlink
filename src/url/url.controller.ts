import { Body, Controller, Post } from '@nestjs/common';
import { UrlService } from './url.service';
import { EncodeUrlDto } from './dto/encode-url.dto';
import { Url } from './interface/url.interface';

@Controller()
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Post('encode')
  encode(@Body() encodeDto: EncodeUrlDto): Url {
    return this.urlService.encode(encodeDto);
  }
}
