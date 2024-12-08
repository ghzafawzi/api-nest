import { Injectable } from '@nestjs/common';
import { CreateCommendeDto } from './dto/create-commende.dto';
import { UpdateCommendeDto } from './dto/update-commende.dto';
import { Commende } from './entities/commende.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommendeService {
  constructor(
    @InjectRepository(Commende)
    private commendeRepository: Repository<Commende>
  ) {}
  async create(createCommendeDto: CreateCommendeDto) {
    let commande=this.commendeRepository.create(createCommendeDto)
    return this.commendeRepository.save(commande);

  }

  findAll() {
    return this.commendeRepository.findAndCount({relations:['idClient','produitList','commandeDetailList','commandeDetailList.idProduit']});
  }

  findOne(id: number) {
    return this.commendeRepository.findOne({where:{id:id}});
  }

 async update(id: number, updateCommendeDto: UpdateCommendeDto) {
  let commende=await this.commendeRepository.preload({
    id:id,
    ...updateCommendeDto
  })
    return this.commendeRepository.save(commende);
  }

  remove(id: number) {
    return this.commendeRepository.delete(id);
  }
}
