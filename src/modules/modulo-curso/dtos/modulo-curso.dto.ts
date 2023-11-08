import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class moduloCursoDTO {
  @IsNumber()
  @IsNotEmpty()
  id?: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @IsNotEmpty()
  fecha_inicio: number;

  @IsNumber()
  @IsNotEmpty()
  fecha_fin: number;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  contenido: string;
}
