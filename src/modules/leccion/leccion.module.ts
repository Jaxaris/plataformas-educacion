import { Module } from '@nestjs/common';
import { LeccionController } from './controller/leccion.controller';
import { leccionService } from './services/leccion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leccion } from './entities/leccion.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Leccion])],
  controllers: [LeccionController],
  providers: [leccionService],
})
export class LeccionModule {}
