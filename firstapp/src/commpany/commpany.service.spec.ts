import { Test, TestingModule } from '@nestjs/testing';
import { CommpanyService } from './commpany.service';

describe('CommpanyService', () => {
  let service: CommpanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommpanyService],
    }).compile();

    service = module.get<CommpanyService>(CommpanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
