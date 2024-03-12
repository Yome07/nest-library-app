"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
let UserBookService = class UserBookService {
    constructor() {
        this.fs = require('fs');
        this.userBooks = [];
    }
    readUserBooksFromFile() {
        try {
            const filePath = (0, path_1.join)(__dirname, 'user-book.json');
            const data = this.fs.readFileSync(filePath, 'utf8');
            return this.userBooks = JSON.parse(data);
        }
        catch (error) {
            console.error('Error reading file', error);
        }
    }
    findAll() {
        return this.readUserBooksFromFile();
    }
    findByUserId(userId) {
        const userBooks = this.readUserBooksFromFile();
        return userBooks.filter(userBook => userBook.userId === userId);
    }
    findByBookId(bookId) {
        const userBooks = this.readUserBooksFromFile();
        return userBooks.filter(userBook => userBook.bookId === bookId);
    }
    markAsRead(userId, bookId) {
        const userBooks = this.readUserBooksFromFile();
        const userBook = userBooks.find(ub => ub.userId === userId && ub.bookId === bookId);
        if (userBook) {
            userBook.isRead = true;
        }
        else {
            userBooks.push({ id: userBooks.length + 1, userId, bookId, isRead: true });
        }
        this.writeUserBooksToFile();
    }
    markAsUnread(userId, bookId) {
        const userBooks = this.readUserBooksFromFile();
        const userBook = userBooks.find(ub => ub.userId === userId && ub.bookId === bookId);
        if (userBook) {
            userBook.isRead = false;
        }
        this.writeUserBooksToFile();
    }
    writeUserBooksToFile() {
        try {
            this.fs.writeFileSync('user-books.json', JSON.stringify(this.userBooks, null, 2), 'utf8');
        }
        catch (error) {
            console.error('Error writing to file', error);
        }
    }
};
exports.UserBookService = UserBookService;
exports.UserBookService = UserBookService = __decorate([
    (0, common_1.Injectable)()
], UserBookService);
//# sourceMappingURL=user-book.service.js.map