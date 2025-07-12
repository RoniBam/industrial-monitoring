import { Injectable } from '@nestjs/common';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Measurement } from '../app/entities/measurement.entity';

@Injectable()
export class MeasurementService {

  constructor(
    @InjectRepository(Measurement)
    private measurementRepository: Repository<Measurement>,
  ) {}

  create(createMeasurementDto: CreateMeasurementDto) {
    const { sensorId, ...rest } = createMeasurementDto;
    return this.measurementRepository.save({
      ...rest,
      sensor: { id: sensorId }
    });
  }

  findAll() {
    return this.measurementRepository.find();
  }

  findOne(id: number) {
    return this.measurementRepository.findOne({ where: { id } });
  }

  update(id: number, updateMeasurementDto: UpdateMeasurementDto) {
    return this.measurementRepository.update(id, updateMeasurementDto);
  }

  remove(id: number) {
    return this.measurementRepository.delete(id);
  }

  findBySensor(sensorId: number) {
    return this.measurementRepository.find({ where: { sensor: { id: sensorId } } });
  }
}
