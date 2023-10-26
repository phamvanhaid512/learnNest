import { Injectable } from '@nestjs/common';
import { UserEntity } from './cats.entity';
@Injectable()
export class UserService {
  private user: UserEntity[] = [
    new UserEntity(101, 'Alan', 'Turing', 'alan@email.com', ['admin']),
  ];
  findAllCats() : UserEntity[] {
    return this.user;
  }
}
