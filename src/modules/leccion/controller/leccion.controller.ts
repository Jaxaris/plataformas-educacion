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
import { leccionDTO } from '../dtos/leccion.dto';
import { leccionService } from '../services/leccion.service';

@Controller('leccion')
export class LeccionController {
  constructor(private readonly leccionService: leccionService) {}

  @Post('/')
  async createdLeccion(@Body() payload: leccionDTO) {
    const newLeccion = await this.leccionService.createdLeccion(payload);
    const data = {
      data: newLeccion,
      message: 'creado',
    };
    return data;
  }

  @Get('/')
  async getLeccion() {
    const leccion = await this.leccionService.getLeccion();
    const data = {
      data: leccion,
      message: 'ok',
    };
    return data;
  }

  @Get('/:id')
  async getLeccionId(@Param('id', ParseIntPipe) id: number) {
    const leccion = await this.leccionService.getLeccionId(id);
    const data = {
      data: leccion,
      message: 'ok',
    };
    return data;
  }

  @Put('/:id')
  async updated(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: leccionDTO,
  ) {
    const leccion = await this.leccionService.updated(id, payload);
    const data = {
      data: leccion,
    };
    return data;
  }

  @Delete('/:id')
  async deleted(@Param('id', ParseIntPipe) id: number) {
    const leccion = await this.leccionService.delete(id);
    const data = {
      data: leccion,
    };
    return data;
  }
}
