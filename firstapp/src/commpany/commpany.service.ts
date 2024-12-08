import { Injectable } from '@nestjs/common';
import { CreateCommpanyDto } from './dto/create-commpany.dto';
import { UpdateCommpanyDto } from './dto/update-commpany.dto';

@Injectable()
export class CommpanyService {
  create(createCommpanyDto: CreateCommpanyDto) {
    return 'This action adds a new commpany';
  }

  findAll() {
    return `This action returns all commpany`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commpany`;
  }

  update(id: number, updateCommpanyDto: UpdateCommpanyDto) {
    return `This action updates a #${id} commpany`;
  }

  remove(id: number) {
    return `This action removes a #${id} commpany`;
  }
}
