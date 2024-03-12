import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentInterface } from './comment.interface';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() comment: CommentInterface): void {
    this.commentsService.create(comment);
  }

  @Get()
  findAll(): CommentInterface[] {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): CommentInterface {
    return this.commentsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() comment: CommentInterface): void {
    this.commentsService.update(+id, comment);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.commentsService.delete(+id);
  }
}
