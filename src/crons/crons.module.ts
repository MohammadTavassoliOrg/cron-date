import { Module } from '@nestjs/common';
import { CronsService } from './crons.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
  providers: [CronsService]
})
export class CronsModule {}
