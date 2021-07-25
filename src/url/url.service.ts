import { Injectable } from '@nestjs/common';
import { EncodeUrlDto } from './dto/encode-url.dto';
import * as shortid from 'shortid';
import { Url } from './interface/url.interface';
import { Urls } from './interface/urlObj.interface';

@Injectable()
export class UrlService {
  private readonly urls: Urls = {};

  encode(encodeUrlDto: EncodeUrlDto): Url {
    const shortUrl = shortid();
    const url = {
      views: 0,
      longUrl: encodeUrlDto.url,
      shortUrl: `${process.env.APP_URL}/${shortUrl}`,
    };
    this.urls[shortUrl] = url;

    return url;
  }
}
