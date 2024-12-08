import { Module } from '@nestjs/common';
import { CommandedetaileService } from './commandedetaile.service';
import { CommandedetaileController } from './commandedetaile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commandedetaile } from './entities/commandedetaile.entity';

@Module({
  controllers: [CommandedetaileController],
  providers: [CommandedetaileService],
  imports:[TypeOrmModule.forFeature([Commandedetaile])],
})
export class CommandedetaileModule {}
