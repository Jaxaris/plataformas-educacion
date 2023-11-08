import { Module } from '@nestjs/common';
import { InscripcionController } from './controller/inscripcion.controller';
import { InscripcionService } from './services/inscripcion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscripcion } from './entities/inscripcion.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Inscripcion])],
  controllers: [InscripcionController],
  providers: [InscripcionService],
})
export class InscripcionModule {}
