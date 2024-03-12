import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import * as moment from 'moment';

@Injectable()
export class ValidateMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    
    if (req.body) {
        const errors =this.validateJSON(req.body);
        if (errors.length > 0) {
            //return res.status(400).json({message: 'Invalid data', errors})
            throw new HttpException('Missing property in request body', HttpStatus.BAD_REQUEST);
        }
    }
    next();
  }

  private validateJSON(data: any): string[] {
    const errors: string[] = [];
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

    private isValidDate(date: string): boolean {
        // isValidDate() checks if a date is a valid one in the format YYYY-MM-DD using moment.js
        return moment(date, 'YYYY-MM-DD', true).isValid();
    }
}