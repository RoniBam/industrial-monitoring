import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { Sensor } from '../app/entities/sensor.entity';
@Injectable()
export class SensorService {

  constructor(
    @InjectRepository(Sensor)
    private sensorRepository: Repository<Sensor>,
  ) {}
  
  create(createSensorDto: CreateSensorDto) {
    Logger.log(createSensorDto);
    const sensor = this.sensorRepository.create(createSensorDto);
    return this.sensorRepository.save(sensor);
  }

  findAll() {
    return this.sensorRepository.find();
  }

  findOne(id: number) {
    return this.sensorRepository.findOne({ where: { id } });
  }

  update(id: number, updateSensorDto: UpdateSensorDto) {
    return this.sensorRepository.update(id, updateSensorDto);
  }

  remove(id: number) {
    return this.sensorRepository.delete(id);
  }
}
