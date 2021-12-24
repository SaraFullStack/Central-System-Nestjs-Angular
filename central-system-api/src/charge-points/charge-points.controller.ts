import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ChargePointsService } from './charge-points.service';
import { CreateChargePointDto } from './dto/create-charge-point.dto';
import { UpdateChargePointDto } from './dto/update-charge-point.dto';
import { ChargePoint } from './entities/charge-point.entity';

@ApiTags('Charge-points')
@Controller('charge-points')
export class ChargePointsController {
  constructor(private readonly chargePointsService: ChargePointsService) { }

  @Post()
  @ApiOperation({ description: 'Create Charge Point' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Create successfully', type: ChargePoint })
  create(@Body() createChargePointDto: CreateChargePointDto) {
    return this.chargePointsService.create(createChargePointDto);
  }

  @Get()
  @ApiOperation({ description: 'Search Charge Points' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Create successfully', type: ChargePoint })
  async findAll() {
    return await this.chargePointsService.findAll();
  }

  @Put(':id')
  @ApiOperation({ description: 'Update Charge Point' })
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Update successfully' })
  update(@Param('id') id: string, @Body() updateChargePointDto: UpdateChargePointDto) {
    return this.chargePointsService.update(id, updateChargePointDto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Delete Charge Point' })
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Delete successfully' })
  remove(@Param('id') id: string) {
    return this.chargePointsService.remove(id);
  }
}
