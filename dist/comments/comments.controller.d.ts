import { CommentsService } from './comments.service';
import { CommentInterface } from './comment.interface';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(comment: CommentInterface): void;
    findAll(): CommentInterface[];
    findOne(id: string): CommentInterface;
    update(id: string, comment: CommentInterface): void;
    remove(id: string): void;
}
