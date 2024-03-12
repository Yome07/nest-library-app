"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateMiddleware = void 0;
const common_1 = require("@nestjs/common");
const moment = require("moment");
let ValidateMiddleware = class ValidateMiddleware {
    use(req, res, next) {
        if (req.body) {
            const errors = this.validateJSON(req.body);
            if (errors.length > 0) {
                throw new common_1.HttpException('Missing property in request body', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        next();
    }
    validateJSON(data) {
        const errors = [];
        if (!data.title || data.title !== 'string') {
            errors.push('Title is required and must be a string');
        }
        if (!data.author || data.author !== 'string') {
            errors.push('Author is required and must be a string');
        }
        if (!data.publisherId || data.publisherId !== 'number') {
            errors.push('PublisherId is required and must be a number');
        }
        if (!data.publicationDate || !this.isValidDate(data.publicationDate)) {
            errors.push('PublicationDate is required and must be a valid date');
        }
        return errors;
    }
    isValidDate(date) {
        return moment(date, 'YYYY-MM-DD', true).isValid();
    }
};
exports.ValidateMiddleware = ValidateMiddleware;
exports.ValidateMiddleware = ValidateMiddleware = __decorate([
    (0, common_1.Injectable)()
], ValidateMiddleware);
//# sourceMappingURL=validate.middleware.js.map