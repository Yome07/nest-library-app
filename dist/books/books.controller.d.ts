import { BooksService } from './books.service';
import { BookInterface } from './book.interface';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(book: BookInterface): void;
    findAll(): BookInterface[];
    findOne(id: string): BookInterface;
    update(id: string, book: BookInterface): void;
    remove(id: string): void;
}
