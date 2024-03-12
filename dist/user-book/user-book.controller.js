"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookController = void 0;
const common_1 = require("@nestjs/common");
const user_book_service_1 = require("./user-book.service");
let UserBookController = class UserBookController {
    constructor(userBookService) {
        this.userBookService = userBookService;
    }
    markAsRead(userId, bookId) {
        this.userBookService.markAsRead(userId, bookId);
    }
    markAsUnread(userId, bookId) {
        this.userBookService.markAsUnread(userId, bookId);
    }
    findAll() {
        return this.userBookService.findAll();
    }
};
exports.UserBookController = UserBookController;
__decorate([
    (0, common_1.Post)(':userId/mark-as-read/:bookId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('bookId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UserBookController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Post)(':userId/mark-as-unread/:bookId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('bookId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UserBookController.prototype, "markAsUnread", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserBookController.prototype, "findAll", null);
exports.UserBookController = UserBookController = __decorate([
    (0, common_1.Controller)('user-book'),
    __metadata("design:paramtypes", [user_book_service_1.UserBookService])
], UserBookController);
//# sourceMappingURL=user-book.controller.js.map