import { PrismaModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';
import { DatesModule } from './dates/dates.module';
import { CronsModule } from './crons/crons.module';

@Module({
  imports: [DatesModule, PrismaModule, CronsModule],
})
export class AppModule {}
