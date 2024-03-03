import { Module } from '@nestjs/common';
import { WeeksController } from './weeks.controller';
import { WeeksService } from './weeks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Week, WeekSchema } from './week.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Week.name, schema: WeekSchema }]),
  ],
  controllers: [WeeksController],
  providers: [WeeksService],
})
export class WeeksModule {}
