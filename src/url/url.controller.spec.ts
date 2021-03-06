import { Test, TestingModule } from '@nestjs/testing';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';

describe('UrlController', () => {
  let controller: UrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlController],
      providers: [UrlService],
    }).compile();

    controller = module.get<UrlController>(UrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('encode', () => {
    it('should return status code of 201 with encoded url', () => {
      const request = { url: 'http://google.com' };
      const encodeUrl = controller.encode(request);
      expect(typeof encodeUrl).toBe('object');
      expect(encodeUrl.longUrl).toBe(request.url);
      expect(encodeUrl.views).toEqual(0);
    });
  });

  describe('decode', () => {
    it('should return status code of 200 with decoded url', () => {
      const request = { url: 'http://google.com' };
      const encodeUrl = controller.encode(request);

      const decodeUrl = controller.decode({ url: encodeUrl.shortUrl });

      expect(typeof decodeUrl).toBe('object');
      expect(decodeUrl.longUrl).toBe(request.url);
    });
  });

  describe('Redirect to full url', () => {
    it('should redirect to the encoded', () => {
      const request = { url: 'http://google.com' };
      const encodeUrl = controller.encode(request);
      const path = encodeUrl.shortUrl.split('/').slice(-1).join('');
      const decodeUrl = controller.getUrl(path);

      expect(typeof decodeUrl).toBe('object');
      expect(decodeUrl).toEqual(request);
    });
  });

  describe('Get Url Statistics', () => {
    it('should return url statistics', () => {
      const request = { url: 'http://google.com' };
      const encodeUrl = controller.encode(request);
      const path = encodeUrl.shortUrl.split('/').slice(-1).join('');
      const urlStatistic = controller.getUrlStatics(path);

      expect(typeof urlStatistic).toBe('object');
      expect(urlStatistic).toEqual({ views: 0, decoded: 0 });
    });
  });
});
