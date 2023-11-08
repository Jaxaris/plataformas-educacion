import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CategoriaDTO {
  @IsNumber()
  @IsNotEmpty()
  id?: number;

  @IsNotEmpty()
  @IsString()
  nombreCategoria: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsDate()
  fechaCreacion?: Date;

  @IsOptional()
  @IsDate()
  fechaActualizacion?: Date;

  @IsOptional()
  @IsBoolean()
  Activo?: boolean;
}
