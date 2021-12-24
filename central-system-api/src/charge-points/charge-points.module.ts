import { Module } from '@nestjs/common';
import { ChargePointsService } from './charge-points.service';
import { ChargePointsController } from './charge-points.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChargePoint } from './entities/charge-point.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChargePoint])],
  controllers: [ChargePointsController],
  providers: [ChargePointsService],
})
export class ChargePointsModule { }
