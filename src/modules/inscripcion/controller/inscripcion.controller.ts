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
import { incripcionDTO } from '../dtos/inscripcion.dto';
import { InscripcionService } from '../services/inscripcion.service';

@Controller('incripcion')
export class InscripcionController {
  constructor(private readonly moduloCursoServise: InscripcionService) {}

  @Post('/')
  async createdIns(@Body() payload: incripcionDTO) {
    const newInscripcion =
      await this.moduloCursoServise.createdModuleCurso(payload);
    const data = {
      data: newInscripcion,
      message: 'creado',
    };
    return data;
  }

  @Get('/')
  async getInscrip() {
    const incripcion = await this.moduloCursoServise.getInscrip();
    const data = {
      data: incripcion,
      message: 'ok',
    };
    return data;
  }

  @Get('/:id')
  async getInscripcion(@Param('id', ParseIntPipe) id: number) {
    const incripcion = await this.moduloCursoServise.getInscripcionId(id);
    const data = {
      data: incripcion,
      message: 'ok',
    };
    return data;
  }

  @Put('/:id')
  async updated(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: incripcionDTO,
  ) {
    const incripcion = await this.moduloCursoServise.updated(id, payload);
    const data = {
      data: incripcion,
    };
    return data;
  }

  @Delete('/:id')
  async deleted(@Param('id', ParseIntPipe) id: number) {
    const incripcion = await this.moduloCursoServise.delete(id);
    const data = {
      data: incripcion,
    };
    return data;
  }
}
