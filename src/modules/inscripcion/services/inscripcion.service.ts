import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Inscripcion } from '../entities/inscripcion.entities';
import { incripcionDTO } from '../dtos/inscripcion.dto';

@Injectable()
export class InscripcionService {
  constructor(
    @InjectRepository(Inscripcion)
    private readonly inscripRepo: Repository<Inscripcion>,
  ) {}

  async createdModuleCurso(payload: incripcionDTO) {
    const inscripciones = await this.inscripRepo.create(payload);
    return await this.inscripRepo.save(inscripciones);
  }

  async getInscrip(): Promise<Inscripcion[]> {
    return await this.inscripRepo.find({ order: { id: 'ASC' } });
  }

  async getInscripcionId(id: number): Promise<Inscripcion> {
    const inscripciones = await this.inscripRepo.findOne({
      where: { id },
    });
    return inscripciones;
  }

  async updated(id: number, payload: incripcionDTO): Promise<Inscripcion> {
    const inscripciones = await this.inscripRepo.findOne({
      where: { id: id },
    });
    this.inscripRepo.merge(inscripciones, payload);
    return await this.inscripRepo.save(inscripciones);
  }

  async delete(id: number): Promise<Inscripcion> {
    const inscripciones = await this.inscripRepo.findOne({
      where: { id: id },
    });
    return await this.inscripRepo.remove(inscripciones);
  }
}
