import { PrismaClient } from '.prisma/client';
import { INestApplication, OnModuleInit } from '@nestjs/common';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    constructor();
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): void;
}
