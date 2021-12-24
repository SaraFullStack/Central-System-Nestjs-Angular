import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChargePointDto } from './dto/create-charge-point.dto';
import { UpdateChargePointDto } from './dto/update-charge-point.dto';
import { ChargePoint } from './entities/charge-point.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ChargePointsService {
  constructor(
    @InjectRepository(ChargePoint)
    private readonly chargePointRepository: Repository<ChargePoint>,
  ) { }

  create(createChargePointDto: CreateChargePointDto) {
    createChargePointDto.id = uuidv4();
    return this.chargePointRepository.save(createChargePointDto);
  }

  async findAll() {
    return await this.chargePointRepository.find({
      order: { identity: 'ASC' },
    });
  }

  update(id: string, updateChargePointDto: UpdateChargePointDto) {
    return this.chargePointRepository.update(id, updateChargePointDto);
  }

  remove(id: string) {
    return this.chargePointRepository.delete(id);
  }
}
