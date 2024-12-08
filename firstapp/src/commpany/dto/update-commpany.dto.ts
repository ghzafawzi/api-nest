import { PartialType } from '@nestjs/swagger';
import { CreateCommpanyDto } from './create-commpany.dto';

export class UpdateCommpanyDto extends PartialType(CreateCommpanyDto) {}
