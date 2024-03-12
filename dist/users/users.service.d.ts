import { UserInterface } from './user.interface';
export declare class UsersService {
    private fs;
    private users;
    private readUsersFromFile;
    create(user: UserInterface): void;
    findAll(): UserInterface[];
    findOne(id: number): UserInterface;
    findByUsername(username: string): UserInterface;
    update(id: number, user: UserInterface): void;
    private writeUsersToFile;
}
