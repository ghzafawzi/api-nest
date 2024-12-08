import { Module } from '@nestjs/common';
import { CommpanyService } from './commpany.service';
import { CommpanyController } from './commpany.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commpany } from './entities/commpany.entity';

@Module({
  controllers: [CommpanyController],
  providers: [CommpanyService],
  imports:[TypeOrmModule.forFeature([Commpany])]
})
export class CommpanyModule {}
