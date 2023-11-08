import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriaDTO } from '../dtos/categoria.dto';
import { CategoriaService } from '../services/categorias.service';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly catergoriaService: CategoriaService) {}

  @Post('/')
  async createCategoria(@Body() payload: CategoriaDTO) {
    const newCategoria = await this.catergoriaService.createCategoria(payload);
    const data = {
      data: newCategoria,
      message: 'creado',
    };
    return data;
  }

  @Get('/')
  async getCat() {
    const categoria = await this.catergoriaService.getCat();
    const data = {
      data: categoria,
      message: 'ok',
    };
    return data;
  }

  @Get('/:id')
  async getCatId(@Param('id', ParseIntPipe) id: number) {
    const categoria = await this.catergoriaService.getCatId(id);
    const data = {
      data: categoria,
      message: 'ok',
    };
    return data;
  }

  @Put('/:id')
  async updateCat(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: CategoriaDTO,
  ) {
    const categoria = await this.catergoriaService.updated(id, payload);
    const data = {
      data: categoria,
    };
    return data;
  }

  @Delete('/:id')
  async deletedCurso(@Param('id', ParseIntPipe) id: number) {
    const categoria = await this.catergoriaService.delete(id);
    const data = {
      data: categoria,
    };
    return data;
  }
}
