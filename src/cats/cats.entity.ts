import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column('simple-array')
  roles: string[];
  constructor (id:number,firstName:string,lastName:string,email:string,roles: string[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.roles = roles;
  }
}