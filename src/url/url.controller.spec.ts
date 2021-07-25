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
});
