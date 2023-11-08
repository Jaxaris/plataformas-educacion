import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from '../entities/categoria.entities';
import { CategoriaDTO } from '../dtos/categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepo: Repository<Categoria>,
  ) {}

  async createCategoria(payload: CategoriaDTO) {
    const categorias = await this.categoriaRepo.create(payload);
    return await this.categoriaRepo.save(categorias);
  }

  async getCat(): Promise<Categoria[]> {
    return await this.categoriaRepo.find({ order: { id: 'ASC' } });
  }

  async getCatId(id: number): Promise<Categoria> {
    const categorias = await this.categoriaRepo.findOne({
      where: { id },
    });
    return categorias;
  }

  async updated(id: number, payload: CategoriaDTO): Promise<Categoria> {
    const categorias = await this.categoriaRepo.findOne({
      where: { id: id },
    });
    this.categoriaRepo.merge(categorias, payload);
    return await this.categoriaRepo.save(categorias);
  }

  async delete(id: number): Promise<Categoria> {
    const categorias = await this.categoriaRepo.findOne({
      where: { id: id },
    });
    return await this.categoriaRepo.remove(categorias);
  }
}
