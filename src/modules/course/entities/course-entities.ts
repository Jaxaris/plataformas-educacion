import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from 'src/modules/auth/entities/users_entities';
import { ModuloCurso } from 'src/modules/modulo-curso/entities/modulo-curso.entities';

@Entity({ name: 'course' })
export class Cursos {
  @PrimaryGeneratedColumn({ type: 'int4', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'nombre', length: 100, nullable: true })
  nombre: string;

  @Column({
    type: 'varchar',
    name: 'descripcion',
    length: 100,
  })
  descripcion: string;

  @Column({ type: 'date', name: 'fecha_inicio' })
  fecha_inicio: Date;

  @Column({ type: 'date', name: 'fecha_fin' })
  fecha_fin: Date;

  @ManyToMany(() => Users, (users: Users) => users.curso)
  users: Users[];

  @ManyToOne(
    () => ModuloCurso,
    (moduloCurso: ModuloCurso) => moduloCurso.cursos,
  )
  modulosCursos: ModuloCurso[];
}
