import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { BookInterface } from './book.interface';

@Injectable()
export class BooksService {
  
  private  fs  = require('fs');

  private books: BookInterface[] = [];
  
  create(book: BookInterface): void {
    const books = this.readBooksFromFile();
    books.push(book);
    this.writeBooksToFile();
  }

  findAll(): BookInterface[] {
    return this.readBooksFromFile();
  }

  findOne(id: number): BookInterface {
    const books = this.readBooksFromFile();
    return books.find(book => book.id === id);
  }

  update(id: number, book: BookInterface): void {
    const books = this.readBooksFromFile();
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books[index] = book;
      this.writeBooksToFile();
    }
  }

  delete(id: number):void {
    const books = this.readBooksFromFile();
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      this.writeBooksToFile();
    }
  }

  private readBooksFromFile(): BookInterface[] {
    try {
      const filePath = join(__dirname, 'books.json');
      const data = fs.readFileSync(filePath, 'utf8');
      return this.books = JSON.parse(data);
    } catch (error) {
      console.error('Erreur lecture fichier', error);
    }
  }

  private writeBooksToFile(): void {
    try {
      fs.writeFileSync('books.json', JSON.stringify(this.books, null, 2), 'utf8');
    } catch (error) {
      console.error('Error writing to file', error);
    }
  }
}
