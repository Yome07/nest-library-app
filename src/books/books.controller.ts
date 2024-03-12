import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookInterface } from './book.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() book: BookInterface): void {
    this.booksService.create(book);
  }

  @Get()
  findAll(): BookInterface[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): BookInterface {
    return this.booksService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() book: BookInterface): void {
    this.booksService.update(+id, book);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void{
    this.booksService.delete(+id);
  }
}
