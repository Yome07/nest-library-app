import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { UserBookInterface } from './user-book.interface';

@Injectable()
export class UserBookService {

  private fs  = require('fs');
  private userBooks: UserBookInterface[] = [];

  private readUserBooksFromFile(): UserBookInterface[] {
    try {
      const filePath = join(__dirname, 'user-book.json');
      const data = this.fs.readFileSync(filePath, 'utf8');
      return this.userBooks = JSON.parse(data);
    } catch (error) {
      console.error('Error reading file', error);
    }
  }

  findAll(): UserBookInterface[] {
    return this.readUserBooksFromFile();
  }

  findByUserId(userId: number): UserBookInterface[] {
    const userBooks = this.readUserBooksFromFile();
    return userBooks.filter(userBook => userBook.userId === userId);
  }

  findByBookId(bookId: number): UserBookInterface[] {
    const userBooks = this.readUserBooksFromFile();
    return userBooks.filter(userBook => userBook.bookId === bookId);
  }

  markAsRead(userId: number, bookId: number): void {
    const userBooks = this.readUserBooksFromFile();
    const userBook = userBooks.find(ub => ub.userId === userId && ub.bookId === bookId);
    if (userBook) {
      userBook.isRead = true;
    } else {
      userBooks.push({ id: userBooks.length + 1, userId, bookId, isRead: true });
    }
    this.writeUserBooksToFile();
  }

  markAsUnread(userId: number, bookId: number): void {
    const userBooks = this.readUserBooksFromFile();
    const userBook = userBooks.find(ub => ub.userId === userId && ub.bookId === bookId);
    if (userBook) {
      userBook.isRead = false;
    }
    this.writeUserBooksToFile();
  }

  private writeUserBooksToFile(): void {
    try {
      this.fs.writeFileSync('user-books.json', JSON.stringify(this.userBooks, null, 2), 'utf8');
    } catch (error) {
      console.error('Error writing to file', error);
    }
  }
}
