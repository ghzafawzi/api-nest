import { Injectable } from '@nestjs/common';
import { CreateCommandedetaileDto } from './dto/create-commandedetaile.dto';
import { UpdateCommandedetaileDto } from './dto/update-commandedetaile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commandedetaile } from './entities/commandedetaile.entity';

@Injectable()
export class CommandedetaileService {
  constructor(
    @InjectRepository(Commandedetaile)
    private CommandedetailesRepository: Repository<Commandedetaile>){}


  async create(CreateCommandedetaileDto: CreateCommandedetaileDto) {
    let commandedetaile=this.CommandedetailesRepository.create(CreateCommandedetaileDto)
    return  this.CommandedetailesRepository.save(commandedetaile);
  }

  findAll() {
    return this.CommandedetailesRepository.findAndCount({relations:['idProduit','commandeId']});
  }

  findOne(id: number) {
    return this.CommandedetailesRepository.findOne({where:{id:id}});
  }

 async update(id: number, updateCommandedetaileDto: UpdateCommandedetaileDto) {
  let commandedetaile=await this.CommandedetailesRepository.preload({
    id:id,
    ...UpdateCommandedetaileDto
  })
    return this.CommandedetailesRepository.save(commandedetaile);
  }

  remove(id: number) {
    return this.CommandedetailesRepository.delete(id);
  }
}
