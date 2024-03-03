import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@users/user.schema';
import { Family, FamilyDocument } from '@families/family.schema';

export enum MealType {
  Breakfast = 'Breakfast',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
}
export class Meal {
  @Prop({ type: String, required: true, enum: MealType })
  type: MealType;
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: false })
  description?: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  chef: User;
}
export enum DayOfWeek {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
}
export class Day {
  @Prop({ type: String, required: true, enum: DayOfWeek })
  weekDay: DayOfWeek;
  @Prop({
    type: [Meal],
    required: true,
    default: [],
    options: { maxlength: 3 },
  })
  meals: Meal[];
}

export type WeekDocument = HydratedDocument<Week>;

@Schema({ collection: 'weeks', timestamps: true })
export class Week {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Family.name }] })
  family: FamilyDocument;
  @Prop({ type: String, required: true })
  firstDay: string;
  @Prop({
    type: [Day],
    required: true,
    default: [],
    options: { maxlength: 7 },
  })
  days: Day[];
}

export const WeekSchema = SchemaFactory.createForClass(Week);
