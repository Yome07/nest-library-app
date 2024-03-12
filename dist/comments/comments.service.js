"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path_1 = require("path");
let CommentsService = class CommentsService {
    constructor() {
        this.fs = require('fs');
        this.comments = [];
    }
    readCommentsFromFile() {
        try {
            const filePath = (0, path_1.join)(__dirname, 'comments.json');
            const data = fs.readFileSync(filePath, 'utf8');
            return this.comments = JSON.parse(data);
        }
        catch (error) {
            console.error('Error reading file', error);
        }
    }
    create(comment) {
        const comments = this.readCommentsFromFile();
        comments.push(comment);
        this.writeCommentsToFile();
    }
    findAll() {
        return this.readCommentsFromFile();
    }
    findOne(id) {
        const comments = this.readCommentsFromFile();
        return comments.find(comment => comment.id === id);
    }
    findByBookId(bookId) {
        const comments = this.readCommentsFromFile();
        return comments.filter(comment => comment.bookId === bookId);
    }
    update(id, comment) {
        const comments = this.readCommentsFromFile();
        const index = comments.findIndex(comment => comment.id === id);
        if (index !== -1) {
            comments[index] = comment;
            this.writeCommentsToFile();
        }
    }
    delete(id) {
        const comments = this.readCommentsFromFile();
        const index = comments.findIndex(comment => comment.id === id);
        if (index !== -1) {
            this.comments.splice(index, 1);
            this.writeCommentsToFile();
        }
    }
    writeCommentsToFile() {
        try {
            fs.writeFileSync('comments.json', JSON.stringify(this.comments, null, 2), 'utf8');
        }
        catch (error) {
            console.error('Error writing to file', error);
        }
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)()
], CommentsService);
//# sourceMappingURL=comments.service.js.map