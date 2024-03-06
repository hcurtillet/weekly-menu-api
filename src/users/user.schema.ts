import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from '@shared/schema';

@Schema({ collection: 'users', timestamps: true, virtuals: true })
export class User extends BaseSchema {
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: true })
  email: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
