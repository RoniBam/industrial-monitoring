import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}


