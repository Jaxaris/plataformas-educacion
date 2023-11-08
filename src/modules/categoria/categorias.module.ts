import { Module } from '@nestjs/common';
import { CategoriaController } from './controller/categoria.controller';
import { CategoriaService } from './services/categorias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
