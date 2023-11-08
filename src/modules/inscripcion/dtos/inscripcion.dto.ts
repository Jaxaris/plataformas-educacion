import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class incripcionDTO {
  @IsNumber()
  @IsNotEmpty()
  id?: number;

  @IsNotEmpty()
  @IsString()
  programa: string;

  @IsNotEmpty()
  @IsDate()
  fechaInscripcion: Date;

  @IsNotEmpty()
  @IsString()
  estadoInscripcion: string;

  @IsNotEmpty()
  @IsInt()
  precio: number;

  @IsNotEmpty()
  @IsInt()
  duracion: number;
}
