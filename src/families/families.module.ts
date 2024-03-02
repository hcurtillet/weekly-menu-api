import { Module } from '@nestjs/common';
import { FamiliesController } from './families.controller';
import { FamiliesService } from './families.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Family, FamilySchema } from './family.schema';
import { User, UserSchema } from '@users/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Family.name, schema: FamilySchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [FamiliesController],
  providers: [FamiliesService],
})
export class FamiliesModule {}
