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

@Entity({ name: 'categoria' })
export class Categoria {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    name: 'nombre_categoria',
  })
  nombreCategoria?: string;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'descripcion' })
  descripcion?: string;

  @Column({ name: 'fecha_creacion', type: 'date', nullable: true })
  fechaCreacion?: Date;

  @Column({ name: 'fecha_actualizacion', type: 'date', nullable: true })
  fechaActualizacion?: Date;

  @Column({ type: 'boolean', nullable: true, name: 'activo' })
  Activo?: boolean;

  //Relaciones

  // @ManyToMany(() => Users, (user: Users) => user.modulosCursos)
  // user: Users[];

  // @OneToMany(() => Cursos, (curso: Cursos) => curso.modulosCursos)
  // cursos: Cursos[];
  @OneToMany(() => Users, (user: Users) => user.categoria)
  user: Users[];
}
