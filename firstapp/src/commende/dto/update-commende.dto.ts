import { PartialType } from '@nestjs/swagger';
import { CreateCommendeDto } from './create-commende.dto';

export class UpdateCommendeDto extends PartialType(CreateCommendeDto) {}
