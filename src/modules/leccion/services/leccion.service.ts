import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Leccion } from '../entities/leccion.entities';
import { leccionDTO } from '../dtos/leccion.dto';

@Injectable()
export class leccionService {
  constructor(
    @InjectRepository(Leccion)
    private readonly leccionRepo: Repository<Leccion>,
  ) {}

  async createdLeccion(payload: leccionDTO) {
    const leccion = await this.leccionRepo.create(payload);
    return await this.leccionRepo.save(leccion);
  }

  async getLeccion(): Promise<Leccion[]> {
    return await this.leccionRepo.find({ order: { id: 'ASC' } });
  }

  async getLeccionId(id: number): Promise<Leccion> {
    const leccion = await this.leccionRepo.findOne({
      where: { id },
    });
    return leccion;
  }

  async updated(id: number, payload: leccionDTO): Promise<Leccion> {
    const leccion = await this.leccionRepo.findOne({
      where: { id: id },
    });
    this.leccionRepo.merge(leccion, payload);
    return await this.leccionRepo.save(leccion);
  }

  async delete(id: number): Promise<Leccion> {
    const leccion = await this.leccionRepo.findOne({
      where: { id: id },
    });
    return await this.leccionRepo.remove(leccion);
  }
}
