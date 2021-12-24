import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
export declare class OrganizationsService {
    private readonly organizationRepository;
    constructor(organizationRepository: Repository<Organization>);
    create(createOrganizationDto: CreateOrganizationDto): Promise<CreateOrganizationDto & Organization>;
    findAll(): Promise<Organization[]>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
