import { BookInterface } from './book.interface';
export declare class BooksService {
    private fs;
    private books;
    create(book: BookInterface): void;
    findAll(): BookInterface[];
    findOne(id: number): BookInterface;
    update(id: number, book: BookInterface): void;
    delete(id: number): void;
    private readBooksFromFile;
    private writeBooksToFile;
}
