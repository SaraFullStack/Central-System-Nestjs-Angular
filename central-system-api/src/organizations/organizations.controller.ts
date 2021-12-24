import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Organization } from './entities/organization.entity';

@ApiTags('Organizations')
@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) { }

  @Post()
  @ApiOperation({ description: 'Create New Organization' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create successfully',
    type: Organization,
  })
  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationsService.create(createOrganizationDto);
  }

  @Get()
  @ApiOperation({ description: 'Search Charge Points' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Create successfully', type: Organization })
  async findAll() {
    return await this.organizationsService.findAll();
  }

  @Put(':id')
  @ApiOperation({ description: 'Update Charge Point' })
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Update successfully' })
  update(@Param('id') id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationsService.update(id, updateOrganizationDto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Delete Charge Point' })
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Delete successfully' })
  remove(@Param('id') id: string) {
    return this.organizationsService.remove(id);
  }
}
