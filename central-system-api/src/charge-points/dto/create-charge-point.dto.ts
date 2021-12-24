import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateOrganizationDto } from 'src/organizations/dto/create-organization.dto';

export class CreateChargePointDto {
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly identity: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly cpo: CreateOrganizationDto;
}