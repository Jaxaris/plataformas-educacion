import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class leccionDTO {
  @IsNumber()
  @IsNotEmpty()
  id?: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  contenido: string;

  @IsNotEmpty()
  @IsString()
  recursos: string;

  @IsString()
  @IsNotEmpty()
  nivel: string;

  @IsNumber()
  @IsOptional()
  duraccion: number;
}
