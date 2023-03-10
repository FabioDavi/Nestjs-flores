import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';



@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }




  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    //return this.prisma.tbladminhm.findMany();
    return null;
  }

  findOne(adminID: number) {
    return 3;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
