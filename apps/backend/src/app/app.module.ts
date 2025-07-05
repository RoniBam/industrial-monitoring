import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorController } from '../sensor.controller';
import { SensorService } from '../sensor.service';
import { Sensor } from '../entities/sensor.entity';
import { SensorModule } from '../sensor.module';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // to load from .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Sensor],
      synchronize: true, // auto-create tables (turn off in prod!)
    }),
    SensorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
