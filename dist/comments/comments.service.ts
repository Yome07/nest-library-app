import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { CommentInterface } from './comment.interface';

@Injectable()
export class CommentsService {

  private  fs  = require('fs');

  private comments: CommentInterface[] = [];

  private readCommentsFromFile(): CommentInterface[] {
    try {
      const filePath = join(__dirname, 'comments.json');
      const data = fs.readFileSync(filePath, 'utf8');
      return this.comments = JSON.parse(data);
    } catch (error) {
      console.error('Error reading file', error);
    }
  }

  create(comment: CommentInterface): void {
    const comments = this.readCommentsFromFile();
    comments.push(comment);
    this.writeCommentsToFile();

  }

  findAll(): CommentInterface[] {
    return this.readCommentsFromFile();
  }

  findOne(id: number): CommentInterface {
    const comments = this.readCommentsFromFile();
    return comments.find(comment => comment.id === id);
  }

  findByBookId(bookId: number): CommentInterface[] {
    const comments = this.readCommentsFromFile();
    return comments.filter(comment => comment.bookId === bookId);
  }

  update(id: number, comment: CommentInterface): void {
    const comments = this.readCommentsFromFile();
    const index = comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
      comments[index] = comment;
      this.writeCommentsToFile();
    }
  }

  delete(id: number): void {
    const comments = this.readCommentsFromFile();
    const index = comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
      this.comments.splice(index, 1);
      this.writeCommentsToFile();
    }
  }

  private writeCommentsToFile(): void {
    try {
      fs.writeFileSync('comments.json', JSON.stringify(this.comments, null, 2), 'utf8');
    } catch (error) {
      console.error('Error writing to file', error);
    }
  }
}
