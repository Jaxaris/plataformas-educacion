import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { CursoModule } from './modules/course/course.module';
import { ModuloCursoModule } from './modules/modulo-curso/modulo-curso.module';
import { LeccionModule } from './modules/leccion/leccion.module';
import { InscripcionModule } from './modules/inscripcion/inscripcion.module';
import { CategoriaModule } from './modules/categoria/categorias.module';
import { FilesModule } from './modules/files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        migrationsTableName: configService.get('MIGRATIONS_TABLE_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    AuthModule,
    CursoModule,
    ModuloCursoModule,
    LeccionModule,
    InscripcionModule,
    CategoriaModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
