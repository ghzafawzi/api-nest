import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandedetaileService } from './commandedetaile.service';
import { CreateCommandedetaileDto } from './dto/create-commandedetaile.dto';
import { UpdateCommandedetaileDto } from './dto/update-commandedetaile.dto';
import { Commandedetaile } from './entities/commandedetaile.entity';

@Controller('commandedetaile')
export class CommandedetaileController {
  constructor(private readonly commandedetaileService: CommandedetaileService) {}

  @Post()
  create(@Body() createCommandedetaileDto: CreateCommandedetaileDto) {
    return this.commandedetaileService.create(createCommandedetaileDto);
  }

  @Get('Commandedetaile-list')
  findAll() {
    return this.commandedetaileService.findAll();
  }

  @Get('commandedetaile/:id')
  findOne(@Param('id') id: string) {
    return this.commandedetaileService.findOne(+id);
  }

  @Patch('update-commandedetaile:id')
  update(@Param('id') id: string, @Body() updateCommandedetaileDto: UpdateCommandedetaileDto) {
    return this.commandedetaileService.update(+id, updateCommandedetaileDto);
  }

  @Delete('delete-commandedetaile/:id')
  remove(@Param('id') id: string) {
    return this.commandedetaileService.remove(+id);
  }
}
