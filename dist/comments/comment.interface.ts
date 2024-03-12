export class CommentInterface {
    public readonly id: number;
    public readonly text: string;
    public readonly userId: number;
    public readonly bookId: number;

    constructor(id: number, text: string, userId: number, bookId: number) {
        this.id = id;
        this.text = text;
        this.userId = userId;
        this.bookId = bookId;
    }
}
