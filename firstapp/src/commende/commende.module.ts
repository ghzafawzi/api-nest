import { Module } from '@nestjs/common';
import { CommendeService } from './commende.service';
import { CommendeController } from './commende.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commende } from './entities/commende.entity';

@Module({
  controllers: [CommendeController],
  providers: [CommendeService],
  imports:[TypeOrmModule.forFeature([Commende])],
})
export class CommendeModule {}
