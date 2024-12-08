import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';

@Controller('produit')
export class ProduitController {
  constructor(private readonly produitService: ProduitService) {}

  @Post('create')
  create(@Body() createProduitDto: CreateProduitDto) {
    return this.produitService.create(createProduitDto);
  }

  @Get('list-produit')
  findAll() {
    return this.produitService.findAll();
  }

  @Get('produit/:id')
  findOne(@Param('id') id: string) {
    return this.produitService.findOne(+id);
  }

  @Patch('produit-update/:id')
  update(@Param('id') id: string, @Body() updateProduitDto: UpdateProduitDto) {
    return this.produitService.update(+id, updateProduitDto);
  }

  @Delete('delete-produit/:id')
  remove(@Param('id') id: string) {
    return this.produitService.remove(+id);
  }
}
