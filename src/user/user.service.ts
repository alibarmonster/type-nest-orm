import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);

    return await this.userRepository.save(user);
  }
}
