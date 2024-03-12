"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path_1 = require("path");
let BooksService = class BooksService {
    constructor() {
        this.fs = require('fs');
        this.books = [];
    }
    create(book) {
        const books = this.readBooksFromFile();
        books.push(book);
        this.writeBooksToFile();
    }
    findAll() {
        return this.readBooksFromFile();
    }
    findOne(id) {
        const books = this.readBooksFromFile();
        return books.find(book => book.id === id);
    }
    update(id, book) {
        const books = this.readBooksFromFile();
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) {
            books[index] = book;
            this.writeBooksToFile();
        }
    }
    delete(id) {
        const books = this.readBooksFromFile();
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            this.writeBooksToFile();
        }
    }
    readBooksFromFile() {
        try {
            const filePath = (0, path_1.join)(__dirname, 'books.json');
            const data = fs.readFileSync(filePath, 'utf8');
            return this.books = JSON.parse(data);
        }
        catch (error) {
            console.error('Erreur lecture fichier', error);
        }
    }
    writeBooksToFile() {
        try {
            fs.writeFileSync('books.json', JSON.stringify(this.books, null, 2), 'utf8');
        }
        catch (error) {
            console.error('Error writing to file', error);
        }
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
//# sourceMappingURL=books.service.js.map