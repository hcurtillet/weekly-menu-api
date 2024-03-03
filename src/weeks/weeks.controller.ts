import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { WeeksService } from './weeks.service';
import { Week } from './week.schema';
import { CreateWeekDto } from './week.dto';

@Controller('weeks')
export class WeeksController {
  constructor(
    @Inject(WeeksService) private readonly weeksService: WeeksService,
  ) {}

  @Get(':familyId/:startDate')
  async findWithStartDate(
    @Param('familyId') familyId: string,
    @Param('startDate') startDate: string,
  ): Promise<Week> {
    return this.weeksService.findWithStartDate(familyId, startDate);
  }

  @Post()
  async createWeek(@Body() week: CreateWeekDto): Promise<Week> {
    return this.weeksService.createWeek(week.familyId, week.startDate);
  }
}
