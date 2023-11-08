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

@Entity({ name: 'leccion' })
export class Leccion {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;

  @Column({ name: 'nombre', type: 'varchar', length: 100, nullable: false })
  titulo: string;

  @Column({
    name: 'descripcion',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  descripcion?: string;

  @Column({ name: 'contenido', type: 'varchar', length: 100, nullable: false })
  contenido: string;

  @Column({ name: 'recursos', type: 'varchar', length: 100, nullable: false })
  recursos: string;

  @Column({ name: 'nivel', type: 'varchar', length: 100, nullable: false })
  nivel: string;

  @Column({ name: 'duracion', type: 'numeric', nullable: false, default: 0 })
  duraccion: number;

  //Relaciones

  // @ManyToMany(() => Users, (user: Users) => user.modulosCursos)
  // user: Users[];

  // @OneToMany(() => Cursos, (curso: Cursos) => curso.modulosCursos)
  // cursos: Cursos[];

  @ManyToOne(() => Users, (user: Users) => user.leccion)
  user: Users[];
}
