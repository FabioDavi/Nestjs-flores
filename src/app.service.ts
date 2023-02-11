/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {


  constructor(private readonly prisma: PrismaService) { }


  findall() {
    return this.prisma.tblacessorios.findMany()
  }

}