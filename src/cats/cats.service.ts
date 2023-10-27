import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';
import { UserEntity } from './cats.entity';
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  create(cat: Cat) {
    this.cats.push(cat);
  }
  findAll(): Cat[] {
    return this.cats;
  }
  private users: UserEntity[] = [
    new UserEntity(101, 'Alan', 'Turing', 'alan@email.com', ['admin']),
    // Thêm dữ liệu mẫu khác ở đây
  ];
  findAllCats(): UserEntity[] {
    return this.users;
    console.log("haipham");
  }
}  
