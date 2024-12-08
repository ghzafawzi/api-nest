import { Injectable } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { Produit } from './entities/produit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProduitService {
  @InjectRepository(Produit)
  private produitRepository: Repository<Produit>

 async create(createProduitDto: CreateProduitDto) {
  let produit=this.produitRepository.create(createProduitDto)
  if(produit.Ttc==null){
produit.Ttc=produit.PrixHT*(produit.Tva/100)+produit.PrixHT
  }
  console.log("produit",Produit)
  return this.produitRepository.save(produit);
     
  }
 

  findAll() {
    return this.produitRepository.findAndCount();
  }
  findOne(id: number) {
    return this.produitRepository.findOne({where:{id:id}});
  }

  async update(id: number, updateProduitDto: UpdateProduitDto) {
    let produit=await  this.produitRepository.preload({
      id:id,
      ...updateProduitDto
    })
    return this.produitRepository.save(produit)
  }

  remove(id: number) {
    return this.produitRepository.delete(id);
  }

}

