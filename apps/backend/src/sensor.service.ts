import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { Sensor } from './entities/sensor.entity';
@Injectable()
export class SensorService {

  constructor(
    @InjectRepository(Sensor)
    private sensorRepository: Repository<Sensor>,
  ) {}
  
  //private sensors: CreateSensorDto[] = [];

  create(createSensorDto: CreateSensorDto) {
    Logger.log(createSensorDto);
    const sensor = this.sensorRepository.create(createSensorDto);
    return this.sensorRepository.save(sensor);
    // const newSensor = {
    //   id: this.sensors.length + 1,
    //   name: createSensorDto.name,
    //   type: createSensorDto.type,
    //   location: createSensorDto.location,
    // };
    // this.sensors.push(newSensor);
    // return newSensor;
  }

  findAll() {
    return this.sensorRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} sensor`;
  }

  update(id: number, updateSensorDto: UpdateSensorDto) {
    return `This action updates a #${id} sensor`;
  }

  remove(id: number) {
    return `This action removes a #${id} sensor`;
  }
}
