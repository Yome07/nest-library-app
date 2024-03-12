"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path_1 = require("path");
let UsersService = class UsersService {
    constructor() {
        this.fs = require('fs');
        this.users = [];
    }
    readUsersFromFile() {
        try {
            const filePath = (0, path_1.join)(__dirname, 'users.json');
            const data = fs.readFileSync(filePath, 'utf8');
            return this.users = JSON.parse(data);
        }
        catch (error) {
            console.error('Error reading file', error);
        }
    }
    create(user) {
        const users = this.readUsersFromFile();
        users.push(user);
        this.writeUsersToFile();
    }
    findAll() {
        return this.readUsersFromFile();
    }
    findOne(id) {
        const users = this.readUsersFromFile();
        return users.find(user => user.id === id);
    }
    findByUsername(username) {
        const users = this.readUsersFromFile();
        return users.find(user => user.username === username);
    }
    update(id, user) {
        const users = this.readUsersFromFile();
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users[index] = user;
            this.writeUsersToFile();
        }
    }
    writeUsersToFile() {
        try {
            fs.writeFileSync('users.json', JSON.stringify(this.users, null, 2), 'utf8');
        }
        catch (error) {
            console.error('Error writing to file', error);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map