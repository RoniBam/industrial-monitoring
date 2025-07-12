import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sensor } from './sensor.entity';

@Entity()
export class Measurement {
    
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
  timestamp!: Date;

  @Column('float')
  value!: number;

  @ManyToOne(() => Sensor, sensor => sensor.measurements, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sensorId' })
  sensor!: Sensor;
}
