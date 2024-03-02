import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { UserDto } from '@users/user.dto';

interface IUserService {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User>;
  update(id: string, user: Partial<User>): Promise<User>;
  remove(id: string): Promise<boolean>;
}
@Injectable()
export class UsersService implements IUserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(user: UserDto): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  findOne(id: string): Promise<User> {
    console.log('id', id);
    return this.userModel.findById(id).exec();
  }
  update(id: string, user: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
