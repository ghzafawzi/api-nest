import { Test, TestingModule } from '@nestjs/testing';
import { CommpanyController } from './commpany.controller';
import { CommpanyService } from './commpany.service';

describe('CommpanyController', () => {
  let controller: CommpanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommpanyController],
      providers: [CommpanyService],
    }).compile();

    controller = module.get<CommpanyController>(CommpanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
