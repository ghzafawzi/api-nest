import { Test, TestingModule } from '@nestjs/testing';
import { CommandedetaileService } from './commandedetaile.service';

describe('CommandedetaileService', () => {
  let service: CommandedetaileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandedetaileService],
    }).compile();

    service = module.get<CommandedetaileService>(CommandedetaileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
