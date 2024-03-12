import { UserBookService } from './user-book.service';
export declare class UserBookController {
    private readonly userBookService;
    constructor(userBookService: UserBookService);
    markAsRead(userId: number, bookId: number): void;
    markAsUnread(userId: number, bookId: number): void;
    findAll(): import("./user-book.interface").UserBookInterface[];
}
