import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Measurement } from './measurement.entity';


@Entity()
export class Sensor {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    type!: string;

    @Column()
    location!: string;

    @OneToMany(() => Measurement, measurement => measurement.sensor)
    measurements!: Measurement[];

}


