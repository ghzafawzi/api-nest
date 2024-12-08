import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository:Repository<Client>,
  ) {}

  
  async create(createUserDto: CreateClientDto) {
    let client=this.clientRepository.create(createUserDto)
       return this.clientRepository.save(client);
  }

  

  findAll() {
    return this.clientRepository.findAndCount()
  }

  findOne(id: number) {
    return this.clientRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    let client=await  this.clientRepository.preload({
      id:id,
      ...updateClientDto
    })
    return this.clientRepository.save(client)
  }

  remove(id: number) {
    return this.clientRepository.delete(id)
  }
}
