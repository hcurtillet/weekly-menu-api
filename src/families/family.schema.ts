import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@users/user.schema';

export type FamilyDocument = HydratedDocument<Family>;

@Schema({ collection: 'families', timestamps: true })
export class Family {
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: true })
  description: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  users: User[];
}

export const FamilySchema = SchemaFactory.createForClass(Family);
