import { CommentInterface } from './comment.interface';
export declare class CommentsService {
    private fs;
    private comments;
    private readCommentsFromFile;
    create(comment: CommentInterface): void;
    findAll(): CommentInterface[];
    findOne(id: number): CommentInterface;
    findByBookId(bookId: number): CommentInterface[];
    update(id: number, comment: CommentInterface): void;
    delete(id: number): void;
    private writeCommentsToFile;
}
