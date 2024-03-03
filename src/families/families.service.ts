import { Injectable } from '@nestjs/common';
import { Family } from './family.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FamilyDto } from './family.dto';
import { User } from '@users/user.schema';

@Injectable()
export class FamiliesService {
  constructor(
    @InjectModel(Family.name) private familyModel: Model<Family>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(family: FamilyDto): Promise<Family> {
    const createdFamily = new this.familyModel(family);
    return createdFamily.save();
  }
  async findAll(): Promise<Family[]> {
    return this.familyModel.find().populate('users').exec();
  }

  async findOne(id: string): Promise<Family> {
    return this.familyModel.findById(id).populate('users').exec();
  }

  async addMember(id: string, userId: string): Promise<Family> {
    return this.familyModel.findByIdAndUpdate(id, { $push: { users: userId } });
  }

  async removeMember(id: string, userId: string): Promise<Family> {
    const family = await this.familyModel.findById(id).populate('users').exec();
    const user = await this.userModel.findById(userId).exec();
    family.users = family.users.filter((u) => u.email !== user.email);
    return family.save();
  }

  async findFamilyByUser(userId: string): Promise<Family> {
    return this.familyModel.findOne({ users: userId }).populate('users').exec();
  }
}
