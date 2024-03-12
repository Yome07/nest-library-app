import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: UserInterface): void {
    this.usersService.create(user);
  }

  @Get()
  findAll(): UserInterface[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): UserInterface {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: UserInterface) {
    return this.usersService.update(+id, user);
  }

}
