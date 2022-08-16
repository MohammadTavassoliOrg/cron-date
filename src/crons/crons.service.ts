import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronsService {
    constructor (private peismaService: PrismaService) {}
    @Cron("0 0 22 * * *", {
        timeZone: "Asia/Tehran"
    })
    async remove() {
        const timeNow:number = Date.now();
        const threeMonthAgo:number = timeNow - (60000*43800) 
        console.log("done");
        return await this.peismaService.date.deleteMany();
    }

}


