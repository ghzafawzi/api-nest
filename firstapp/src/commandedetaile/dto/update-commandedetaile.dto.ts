import { PartialType } from '@nestjs/swagger';
import { CreateCommandedetaileDto } from './create-commandedetaile.dto';

export class UpdateCommandedetaileDto extends PartialType(CreateCommandedetaileDto) {}
