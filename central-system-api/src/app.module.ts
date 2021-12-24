import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import configuration from '../config/configuration';
import { OrganizationsModule } from './organizations/organizations.module';
import { ChargePointsModule } from './charge-points/charge-points.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: configuration(),
    }),
    TypeOrmModule.forRoot(),
    ScheduleModule.forRoot(),
    OrganizationsModule,
    ChargePointsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
