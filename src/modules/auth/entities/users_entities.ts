import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersImage } from './user_image.entities';
import { Cursos } from 'src/modules/course/entities/course-entities';
import { ModuloCurso } from 'src/modules/modulo-curso/entities/modulo-curso.entities';
import { Leccion } from 'src/modules/leccion/entities/leccion.entities';
import { Inscripcion } from '../../inscripcion/entities/inscripcion.entities';
import { Categoria } from 'src/modules/categoria/entities/categoria.entities';
import { CategoriaController } from '../../categoria/controller/categoria.controller';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;
  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 100,
    nullable: false,
    unique: true,
  })
  email: string;
  @Column({
    name: 'password',
    type: 'varchar',
    length: 100,
    nullable: false,
    select: false,
  })
  password: string;
  @Column({ name: 'telefono', type: 'varchar', length: 20, nullable: true })
  telefono: string;
  @Column({ name: 'token', type: 'varchar', length: 200, nullable: true })
  token: string;
  @Column({
    name: 'is_active',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  isActive: boolean;

  @Column({ name: 'file_name', type: 'varchar', nullable: true })
  fileName: string;

  @OneToMany(() => UsersImage, (userImage) => userImage.user, {
    cascade: true,
  })
  images?: UsersImage[];

  @ManyToMany(() => Cursos, (curso: Cursos) => curso.users, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  curso: Cursos[];

  @ManyToMany(
    () => ModuloCurso,
    (moduloCurso: ModuloCurso) => moduloCurso.user,
    {
      eager: true,
      cascade: true,
    },
  )
  @JoinTable()
  modulosCursos: ModuloCurso[];

  @ManyToMany(() => Leccion, (leccion: Leccion) => leccion.user, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  leccion: Leccion[];

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.user, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  inscripcion: Inscripcion[];

  @ManyToOne(() => Categoria, (categoria) => categoria.user, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  categoria: Categoria[];
}
