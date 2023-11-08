import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CursosDTO {
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsOptional()
  @IsString()
  fecha_inicio?: string;

  @IsNumber()
  @IsNotEmpty()
  fecha_fin: number;
}
