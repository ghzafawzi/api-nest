import { Test, TestingModule } from '@nestjs/testing';
import { CommendeService } from './commende.service';

describe('CommendeService', () => {
  let service: CommendeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommendeService],
    }).compile();

    service = module.get<CommendeService>(CommendeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
