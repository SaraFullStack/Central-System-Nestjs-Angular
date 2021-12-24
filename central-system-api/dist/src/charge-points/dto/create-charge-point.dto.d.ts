import { CreateOrganizationDto } from 'src/organizations/dto/create-organization.dto';
export declare class CreateChargePointDto {
    id: string;
    readonly identity: string;
    readonly cpo: CreateOrganizationDto;
}
