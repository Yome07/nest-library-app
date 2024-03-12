export class BookInterface {
    public readonly id: number;
    public readonly title: string;
    public readonly author: string;
    public readonly publisher: string;
    public readonly publicationDate: Date;

    constructor(id: number, title: string, author: string, publisher: string, publicationDate: Date) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.publicationDate = publicationDate;
    }
}
