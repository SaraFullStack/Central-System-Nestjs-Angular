import { PartialType } from '@nestjs/swagger';
import { CreateChargePointDto } from './create-charge-point.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateChargePointDto extends PartialType(CreateChargePointDto) {
  @ApiPropertyOptional()
  readonly identity: string;

  @ApiPropertyOptional()
  readonly cpoId: string;
}
