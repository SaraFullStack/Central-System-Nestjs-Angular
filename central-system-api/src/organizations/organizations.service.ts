import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
  ) { }

  create(createOrganizationDto: CreateOrganizationDto) {
    createOrganizationDto.id = uuidv4();
    return this.organizationRepository.save(createOrganizationDto);
  }

  async findAll() {
    return await this.organizationRepository.find({
      order: { name: 'ASC' },
    });
  }

  update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationRepository.update(id, updateOrganizationDto);
  }

  remove(id: string) {
    return this.organizationRepository.delete(id);
  }
}
