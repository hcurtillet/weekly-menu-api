import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User, UserDocument } from '@users/user.schema';
import { BaseSchema } from '@shared/schema';

export type FamilyDocument = HydratedDocument<Family>;

@Schema({ collection: 'families', timestamps: true, virtuals: true })
export class Family extends BaseSchema {
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: false })
  description?: string;
  @Prop({
    type: [
      { type: mongoose.Schema.Types.ObjectId, ref: User.name, unique: true },
    ],
  })
  users: UserDocument[];
}

export const FamilySchema = SchemaFactory.createForClass(Family);
