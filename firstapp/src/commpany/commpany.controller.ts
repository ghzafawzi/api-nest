import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommpanyService } from './commpany.service';
import { CreateCommpanyDto } from './dto/create-commpany.dto';
import { UpdateCommpanyDto } from './dto/update-commpany.dto';

@Controller('commpany')
export class CommpanyController {
  constructor(private readonly commpanyService: CommpanyService) {}

  @Post()
  create(@Body() createCommpanyDto: CreateCommpanyDto) {
    return this.commpanyService.create(createCommpanyDto);
  }

  @Get()
  findAll() {
    return this.commpanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commpanyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommpanyDto: UpdateCommpanyDto) {
    return this.commpanyService.update(+id, updateCommpanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commpanyService.remove(+id);
  }
}
