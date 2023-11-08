import { Module } from '@nestjs/common';
import { ModuloCursoController } from './controller/modulo-curso.controller';
import { ModuloCursoService } from './services/modulo-curso.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuloCurso } from './entities/modulo-curso.entities';

@Module({
  imports: [TypeOrmModule.forFeature([ModuloCurso])],
  controllers: [ModuloCursoController],
  providers: [ModuloCursoService],
})
export class ModuloCursoModule {}
