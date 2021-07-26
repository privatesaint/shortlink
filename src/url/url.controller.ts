import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { UrlService } from './url.service';
import { EncodeUrlDto } from './dto/encode-url.dto';
import { Url } from './interface/url.interface';
import { DecodedUrl } from './interface/decodeUrl.interface';

import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('url')
@Controller()
export class UrlController {
  constructor(private urlService: UrlService) {}

  @ApiOperation({ summary: 'Encode url' })
  @ApiResponse({ status: 201, description: 'Return encoded url' })
  @Post('encode')
  encode(@Body() encodeDto: EncodeUrlDto): Url {
    return this.urlService.encode(encodeDto);
  }

  @ApiOperation({ summary: 'Decode encoded url' })
  @ApiResponse({ status: 200, description: 'Return decoded url' })
  @Post('decode')
  decode(@Body() encodeDto: EncodeUrlDto): DecodedUrl {
    return this.urlService.decode(encodeDto);
  }

  @ApiOperation({ summary: 'Redirect to orignial path' })
  @ApiResponse({ status: 201, description: 'Redirect to orignial pat3' })
  @Get(':url')
  @Redirect('', 301)
  getUrl(@Param('url') url: string) {
    return this.urlService.redirectUrl(url);
  }

  @ApiOperation({ summary: 'Url statistics' })
  @ApiResponse({ status: 200, description: 'Return url statistics' })
  @Get('statistic/:url_path')
  getUrlStatics(@Param('url_path') url_path: string) {
    return this.urlService.getUrlStatics(url_path);
  }
}
