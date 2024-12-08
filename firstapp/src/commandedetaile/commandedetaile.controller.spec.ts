import { Test, TestingModule } from '@nestjs/testing';
import { CommandedetaileController } from './commandedetaile.controller';
import { CommandedetaileService } from './commandedetaile.service';

describe('CommandedetaileController', () => {
  let controller: CommandedetaileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommandedetaileController],
      providers: [CommandedetaileService],
    }).compile();

    controller = module.get<CommandedetaileController>(CommandedetaileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
