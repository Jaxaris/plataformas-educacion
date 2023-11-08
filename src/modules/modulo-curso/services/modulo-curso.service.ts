import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuloCurso } from '../entities/modulo-curso.entities';
import { moduloCursoDTO } from '../dtos/modulo-curso.dto';

@Injectable()
export class ModuloCursoService {
  constructor(
    @InjectRepository(ModuloCurso)
    private readonly moduloCursoRepo: Repository<ModuloCurso>,
  ) {}

  async createdModuleCurso(payload: moduloCursoDTO) {
    const moduloCursos = await this.moduloCursoRepo.create(payload);
    return await this.moduloCursoRepo.save(moduloCursos);
  }

  async getModulo(): Promise<ModuloCurso[]> {
    return await this.moduloCursoRepo.find({ order: { id: 'ASC' } });
  }

  async getModuloId(id: number): Promise<ModuloCurso> {
    const moduloCursos = await this.moduloCursoRepo.findOne({
      where: { id },
    });
    return moduloCursos;
  }

  async updated(id: number, payload: moduloCursoDTO): Promise<ModuloCurso> {
    const moduloCursos = await this.moduloCursoRepo.findOne({
      where: { id: id },
    });
    this.moduloCursoRepo.merge(moduloCursos, payload);
    return await this.moduloCursoRepo.save(moduloCursos);
  }

  async delete(id: number): Promise<ModuloCurso> {
    const moduloCursos = await this.moduloCursoRepo.findOne({
      where: { id: id },
    });
    return await this.moduloCursoRepo.remove(moduloCursos);
  }
}
