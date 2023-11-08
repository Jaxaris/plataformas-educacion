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
import { moduloCursoDTO } from '../dtos/modulo-curso.dto';
import { ModuloCursoService } from '../services/modulo-curso.service';

@Controller('modulo')
export class ModuloCursoController {
  constructor(private readonly moduloCursoServise: ModuloCursoService) {}

  @Post('/')
  async createdModulo(@Body() payload: moduloCursoDTO) {
    const newModuloCurso =
      await this.moduloCursoServise.createdModuleCurso(payload);
    const data = {
      data: newModuloCurso,
      message: 'creado',
    };
    return data;
  }

  @Get('/')
  async getModulo() {
    const modulo = await this.moduloCursoServise.getModulo();
    const data = {
      data: modulo,
      message: 'ok',
    };
    return data;
  }

  @Get('/:id')
  async getCursoId(@Param('id', ParseIntPipe) id: number) {
    const modulo = await this.moduloCursoServise.getModuloId(id);
    const data = {
      data: modulo,
      message: 'ok',
    };
    return data;
  }

  @Put('/:id')
  async updateCurso(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: moduloCursoDTO,
  ) {
    const modulo = await this.moduloCursoServise.updated(id, payload);
    const data = {
      data: modulo,
    };
    return data;
  }

  @Delete('/:id')
  async deletedCurso(@Param('id', ParseIntPipe) id: number) {
    const modulo = await this.moduloCursoServise.delete(id);
    const data = {
      data: modulo,
    };
    return data;
  }
}
