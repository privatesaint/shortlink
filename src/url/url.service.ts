import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { EncodeUrlDto } from './dto/encode-url.dto';
import * as shortid from 'shortid';
import { Url } from './interface/url.interface';
import { Urls } from './interface/urlObj.interface';
import { getUrlPath } from '../utils/helper';
import { DecodedUrl } from './interface/decodeUrl.interface';

@Injectable()
export class UrlService {
  private readonly urls: Urls = {};

  findOne(url: string): Url {
    const urlObj = this.urls[url];

    if (!urlObj) {
      throw new HttpException(
        { statusCode: 404, message: 'Address not found' },
        HttpStatus.NOT_FOUND,
      );
    }
    return urlObj;
  }

  encode(encodeUrlDto: EncodeUrlDto): Url {
    const shortUrl = shortid();
    const url = {
      views: 0,
      decoded: 0,
      longUrl: encodeUrlDto.url,
      shortUrl: `${process.env.APP_URL}/${shortUrl}`,
    };
    this.urls[shortUrl] = url;

    return url;
  }

  decode(encodeUrlDto: EncodeUrlDto): DecodedUrl {
    const shortUrl = getUrlPath(encodeUrlDto.url);

    const url = this.findOne(shortUrl);
    url.decoded += 1;

    return { longUrl: url.longUrl };
  }

  redirectUrl(url: string) {
    const urlObj = this.findOne(url);
    urlObj.views += 1;

    return { url: urlObj.longUrl };
  }

  getUrlStatics(url: string) {
    const { views, decoded } = this.findOne(url);

    return { views, decoded };
  }
}
