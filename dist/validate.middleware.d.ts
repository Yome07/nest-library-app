import { NestMiddleware } from "@nestjs/common";
export declare class ValidateMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function): void;
    private validateJSON;
    private isValidDate;
}
