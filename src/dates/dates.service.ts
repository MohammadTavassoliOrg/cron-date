import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateDateDto } from './dto/create-date.dto';

@Injectable()
export class DatesService {
  constructor (private peismaService: PrismaService) {}
  async create(createDateDto: CreateDateDto) {
    return await this.peismaService.date.create({data: createDateDto});
  }

  async findAll() {
    return await this.peismaService.date.findMany();
  }

  async remove(id: number) {
    return await this.peismaService.date.delete({where: {id}});
  }
}
