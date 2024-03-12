export class UserBookInterface {
    public id: number;
    public userId: number;
    public bookId: number;
    public isRead: boolean;

    constructor(id: number, userId: number, bookId: number, isRead: boolean) {
        this.id = id;
        this.userId = userId;
        this.bookId = bookId;
        this.isRead = isRead;
    }
}
