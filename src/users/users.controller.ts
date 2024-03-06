import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';
import { formatUser } from '@users/helpers';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {}
  @Post()
  async create(@Body() user: UserDto): Promise<UserDto> {
    return formatUser(await this.usersService.create(user));
  }
  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.usersService.findAll().then((users) => users.map(formatUser));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    return formatUser(await this.usersService.findOne(id));
  }
}
