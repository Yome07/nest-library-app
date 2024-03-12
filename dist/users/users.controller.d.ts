import { UsersService } from './users.service';
import { UserInterface } from './user.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(user: UserInterface): void;
    findAll(): UserInterface[];
    findOne(id: string): UserInterface;
    update(id: string, user: UserInterface): void;
}
