import { Injectable } from '@nestjs/common';
import {  UserService  } from '../cats/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}
  /*
    Implementation that makes use of this.usersService
  */
}