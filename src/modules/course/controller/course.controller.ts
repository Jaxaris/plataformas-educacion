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
import { CursosService } from '../services/course.service';
import { CursosDTO } from '../dtos/course-dto';

@Controller('cursos')
export class CursoController {
  constructor(private readonly cursoServise: CursosService) {}

  @Post('/')
  async createdCurso(@Body() payload: CursosDTO) {
    const newCurso = await this.cursoServise.created(payload);
    const data = {
      data: newCurso,
      message: 'created',
    };
    return data;
  }

  @Get('/')
  async getCurso() {
    const curso = await this.cursoServise.getCurso();
    const data = {
      data: curso,
      message: 'ok',
    };
    return data;
  }

  @Get('/:id')
  async getCursoId(@Param('id', ParseIntPipe) id: number) {
    const curso = await this.cursoServise.getCursoId(id);
    const data = {
      data: curso,
      message: 'ok',
    };
    return data;
  }

  @Put('/:id')
  async updateCurso(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: CursosDTO,
  ) {
    const curso = await this.cursoServise.updated(id, payload);
    const data = {
      data: curso,
    };
    return data;
  }

  @Delete('/:id')
  async deletedCurso(@Param('id', ParseIntPipe) id: number) {
    const curso = await this.cursoServise.delete(id);
    const data = {
      data: curso,
    };
    return data;
  }
}
