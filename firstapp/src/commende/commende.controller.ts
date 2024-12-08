import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommendeService } from './commende.service';
import { CreateCommendeDto } from './dto/create-commende.dto';
import { UpdateCommendeDto } from './dto/update-commende.dto';

@Controller('commende')
export class CommendeController {
  constructor(private readonly commendeService: CommendeService) {}

  @Post()
  create(@Body() createCommendeDto: CreateCommendeDto) {
    return this.commendeService.create(createCommendeDto);
  }

  @Get('commande-list')
  findAll() {
    return this.commendeService.findAll();
  }

  @Get('commande/:id')
  findOne(@Param('id') id: string) {
    return this.commendeService.findOne(+id);
  }

  @Patch('update-commande/:id')
  update(@Param('id') id: string, @Body() updateCommendeDto: UpdateCommendeDto) {
    return this.commendeService.update(+id, updateCommendeDto);
  }

  @Delete('delete-commande/:id')
  remove(@Param('id') id: string) {
    return this.commendeService.remove(+id);
  }
}
