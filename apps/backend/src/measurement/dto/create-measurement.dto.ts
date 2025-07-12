import {IsNumber, IsDateString } from 'class-validator';

export class CreateMeasurementDto {
  @IsNumber()
  sensorId!: number;

  @IsDateString()
  timestamp!: string;

  @IsNumber()
  value!: number;
}
