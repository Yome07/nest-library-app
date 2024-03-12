import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { UserInterface } from './user.interface';

@Injectable()
export class UsersService {
  private fs = require('fs');

  private users: UserInterface[] = [];

  private readUsersFromFile(): UserInterface[] {
    try {
      const filePath = join(__dirname, 'users.json');
      const data = fs.readFileSync(filePath, 'utf8');
      return this.users = JSON.parse(data);
    } catch (error) {
      console.error('Error reading file', error);
    }
  }

  create(user: UserInterface): void {
    const users = this.readUsersFromFile();
    users.push(user);
    this.writeUsersToFile();

  }

  findAll(): UserInterface[] {
    return this.readUsersFromFile();
  }

  findOne(id: number): UserInterface {
    const users = this.readUsersFromFile();
    return users.find(user => user.id === id);
  }

  findByUsername(username: string): UserInterface {
    const users = this.readUsersFromFile();
    return users.find(user => user.username === username);
  }

  update(id: number, user: UserInterface): void {
    const users = this.readUsersFromFile();
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = user;
      this.writeUsersToFile();
    }
  }

  private writeUsersToFile(): void {
    try {
      fs.writeFileSync('users.json', JSON.stringify(this.users, null, 2), 'utf8');
    } catch (error) {
      console.error('Error writing to file', error);
    }
  }

}
