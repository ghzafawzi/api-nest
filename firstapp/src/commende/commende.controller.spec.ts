import { Test, TestingModule } from '@nestjs/testing';
import { CommendeController } from './commende.controller';
import { CommendeService } from './commende.service';

describe('CommendeController', () => {
  let controller: CommendeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommendeController],
      providers: [CommendeService],
    }).compile();

    controller = module.get<CommendeController>(CommendeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
