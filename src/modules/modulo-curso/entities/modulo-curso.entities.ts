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
import { Cursos } from '../../course/entities/course-entities';

@Entity({ name: 'modulo_curso' })
export class ModuloCurso {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;

  @Column({ name: 'nombre', type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({
    name: 'descripcion',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  descripcion?: string;

  @Column({ name: 'fecha_inicio', type: 'date', nullable: false })
  fecha_inicio: Date;

  @Column({ name: 'fecha_fin', type: 'date', nullable: false })
  fecha_fin: Date;

  @Column({ name: 'categoria', type: 'varchar', length: 100, nullable: false })
  categoria: string;

  @Column({ name: 'contenido', type: 'varchar', length: 100, nullable: false })
  contenido: string;

  //Relaciones

  @ManyToMany(() => Users, (user: Users) => user.modulosCursos)
  user: Users[];

  @OneToMany(() => Cursos, (curso: Cursos) => curso.modulosCursos)
  cursos: Cursos[];
}
