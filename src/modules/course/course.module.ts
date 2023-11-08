import { Module } from '@nestjs/common';

import { CursosService } from './services/course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cursos } from './entities/course-entities';
import { CursoController } from './controller/course.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cursos])],
  controllers: [CursoController],
  providers: [CursosService],
})
export class CursoModule {}
