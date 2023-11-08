import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Users } from '../entities/users_entities';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPartialTypeDto, UsersDto } from '../dtos/users_dto';
import * as bcrypt from 'bcrypt';
import { UsersImage } from '../entities/user_image.entities';

@Injectable()
export class UsersService {
  users: any[] = [];

  constructor(
    @InjectRepository(UsersImage)
    private readonly usersImageRepository: Repository<UsersImage>,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,

    @Inject(DataSource) private readonly dataSources: DataSource,
  ) {}

  countItems() {
    return this.users.length;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });

    if (!user) {
      throw new NotFoundException('No se encontro el usuario');
    }

    return user;
  }
  async created(createUserDto: UsersDto) {
    const { images = [], password, ...detailUser } = createUserDto;
    const user = await this.usersRepository.create({
      ...detailUser,
      password: bcrypt.hashSync(password, 10),
      images: images.map((image) =>
        this.usersImageRepository.create({ url: image }),
      ),
    });

    await this.usersRepository.save(user);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  async findById(id: number) {
    const user = await this.usersRepository.findOne({ where: { id: id } });
    return user;
  }

  deleted(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    return 'Usuario eliminado con éxito';
  }

  async updated(id: number, payload: UserPartialTypeDto) {
    const { images, ...rest } = payload;
    const user = await this.usersRepository.preload({
      id: id,
      ...rest,
      images: [],
    });
    const queryRunner = this.dataSources.createQueryRunner();
    await queryRunner.startTransaction();
    await queryRunner.connect();
    if (images) {
      await queryRunner.manager.delete(UsersImage, { user: { id } });
      user.images = images.map((valorimage) =>
        this.usersImageRepository.create({ url: valorimage }),
      );
    } else {
      user.images = await this.usersImageRepository.findBy({
        user: { id: id },
      });
    }
    await queryRunner.manager.save(user);
    await queryRunner.commitTransaction();
    await queryRunner.release();
    return user;
  }
}
