import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").tbladminhm[]>;
    findOne(id: string): number;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
