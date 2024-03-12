import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserBookService } from './user-book.service';

@Controller('user-book')
export class UserBookController {
  constructor(private readonly userBookService: UserBookService) {}

  @Post(':userId/mark-as-read/:bookId')
  markAsRead(@Param('userId') userId: number, @Param('bookId') bookId: number): void {
    this.userBookService.markAsRead(userId, bookId);
  }

  @Post(':userId/mark-as-unread/:bookId')
  markAsUnread(@Param('userId') userId: number, @Param('bookId') bookId: number): void {
    this.userBookService.markAsUnread(userId, bookId);
  }

  @Get()
  findAll() {
    return this.userBookService.findAll();
  }
}
