import { UserBookInterface } from './user-book.interface';
export declare class UserBookService {
    private fs;
    private userBooks;
    private readUserBooksFromFile;
    findAll(): UserBookInterface[];
    findByUserId(userId: number): UserBookInterface[];
    findByBookId(bookId: number): UserBookInterface[];
    markAsRead(userId: number, bookId: number): void;
    markAsUnread(userId: number, bookId: number): void;
    private writeUserBooksToFile;
}
