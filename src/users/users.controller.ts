import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';
import { UserDto } from './user.dto';
import { formatUser } from '@users/helpers';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {}
  @Post()
  async create(@Body() user: UserDto): Promise<User> {
    return formatUser(await this.usersService.create(user));
  }
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return formatUser(await this.usersService.findOne(id));
  }
}
