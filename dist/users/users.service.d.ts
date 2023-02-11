import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").tbladminhm[]>;
    findOne(adminID: number): number;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
