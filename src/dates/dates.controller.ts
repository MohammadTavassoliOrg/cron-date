import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatesService } from './dates.service';
import { CreateDateDto } from './dto/create-date.dto';

@Controller('api/dates')
export class DatesController {
  constructor(private readonly datesService: DatesService) {}

  @Post()
  create(@Body() createDateDto: CreateDateDto) {
    return this.datesService.create(createDateDto);
  }

  @Get()
  findAll() {
    return this.datesService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const ids:number = parseInt(id)
    return this.datesService.remove(ids);
  }
}
