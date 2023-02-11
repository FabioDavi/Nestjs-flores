import { PrismaService } from './prisma/prisma.service';
export declare class AppService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findall(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").tblacessorios[]>;
}
