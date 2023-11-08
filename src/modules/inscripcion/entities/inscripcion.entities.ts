import { Users } from 'src/modules/auth/entities/users_entities';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'incripcion' })
export class Inscripcion {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false, name: 'programa' })
  programa: string;

  @Column({ type: 'date', nullable: false, name: 'fecha_inscripcion' })
  fechaInscripcion: Date;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    name: 'estado_inscripcion',
  })
  estadoInscripcion: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
    name: 'precio',
  })
  precio: number;

  @Column({ type: 'int', nullable: false, name: 'duracion' })
  duracion: number;

  //Relaciones
  @ManyToOne(() => Users, (user: Users) => user.inscripcion)
  user: Users[];
}
