import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FamiliesService } from './families.service';
import { Family } from './family.schema';
import { AddMemberDto, FamilyDto } from './family.dto';
import { formatFamily } from '@families/helpers';

@Controller('families')
export class FamiliesController {
  constructor(
    @Inject(FamiliesService) private readonly familiesService: FamiliesService,
  ) {}

  @Post()
  async create(@Body() family: FamilyDto): Promise<FamilyDto> {
    return formatFamily(await this.familiesService.create(family));
  }

  @Get()
  async findAll(): Promise<FamilyDto[]> {
    return this.familiesService
      .findAll()
      .then((families) => families.map(formatFamily));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Family> {
    return this.familiesService.findOne(id);
  }

  @Get('user/:userId')
  async findFamilyByUser(@Param('userId') userId: string): Promise<FamilyDto> {
    return this.familiesService.findFamilyByUser(userId).then(formatFamily);
  }

  @Put(':id')
  async addMember(
    @Param('id') id: string,
    @Body() { userId }: AddMemberDto,
  ): Promise<FamilyDto> {
    return formatFamily(await this.familiesService.addMember(id, userId));
  }

  @Delete(':id/members/:userId')
  async removeMember(
    @Param('id') id: string,
    @Param('userId') userId: string,
  ): Promise<FamilyDto> {
    return formatFamily(await this.familiesService.removeMember(id, userId));
  }
}
