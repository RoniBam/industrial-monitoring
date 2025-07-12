import { Module } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { MeasurementController } from './measurement.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Measurement } from '../app/entities/measurement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Measurement])],
  providers: [MeasurementService],
  controllers: [MeasurementController],
  exports: [MeasurementService],
})
export class MeasurementModule {}