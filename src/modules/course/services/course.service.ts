import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cursos } from '../entities/course-entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CursosDTO } from '../dtos/course-dto';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Cursos)
    private readonly cursoRepository: Repository<Cursos>,
  ) {}

  async created(payload: CursosDTO) {
    const cursos = await this.cursoRepository.create(payload);
    return await this.cursoRepository.save(cursos);
  }

  async getCurso(): Promise<Cursos[]> {
    return await this.cursoRepository.find({ order: { id: 'ASC' } });
  }

  async getCursoId(id: number): Promise<Cursos> {
    const cursos = await this.cursoRepository.findOne({
      where: { id },
    });
    return cursos;
  }

  async updated(id: number, payload: CursosDTO): Promise<Cursos> {
    const cursos = await this.cursoRepository.findOne({
      where: { id: id },
    });
    this.cursoRepository.merge(cursos, payload);
    return await this.cursoRepository.save(cursos);
  }

  async delete(id: number): Promise<Cursos> {
    const cursos = await this.cursoRepository.findOne({
      where: { id: id },
    });
    return await this.cursoRepository.remove(cursos);
  }
}
