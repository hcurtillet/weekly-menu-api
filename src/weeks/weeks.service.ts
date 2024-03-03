import { InjectModel } from '@nestjs/mongoose';
import { DayOfWeek, MealType, Week, WeekDocument } from './week.schema';
import { Model } from 'mongoose';
import { formatStringToDate } from '@shared/helpers';

export class WeeksService {
  constructor(@InjectModel(Week.name) private weekModel: Model<WeekDocument>) {}

  async findAll(): Promise<Week[]> {
    return this.weekModel.find().exec();
  }

  async findWithStartDate(familyId: string, startDate: string): Promise<Week> {
    return this.weekModel
      .findOne({ family: familyId, firstDay: startDate })
      .populate('family')
      .exec();
  }

  async updateMeal(mealId: string, meal: any): Promise<Week> {
    return this.weekModel.findOneAndUpdate(
      { 'days.meals._id': mealId },
      {
        $set: {
          'days.$[].meals.$[meal]': meal,
        },
      },
      { arrayFilters: [{ 'meal._id': mealId }] },
    );
  }

  async createWeek(familyId: string, startDate: string): Promise<Week> {
    const start = formatStringToDate(startDate);
    if (start.getDay() !== 0) {
      throw new Error('Start date must be a Sunday');
    }
    const meals = [
      { type: MealType.Breakfast, name: '' },
      { type: MealType.Lunch, name: '' },
      { type: MealType.Dinner, name: '' },
    ];
    const days = [
      {
        weekDay: DayOfWeek.Sunday,
        meals: [...meals],
      },
      {
        weekDay: DayOfWeek.Monday,
        meals: [...meals],
      },
      {
        weekDay: DayOfWeek.Tuesday,
        meals: [...meals],
      },
      {
        weekDay: DayOfWeek.Wednesday,
        meals: [...meals],
      },
      {
        weekDay: DayOfWeek.Thursday,
        meals: [...meals],
      },
      {
        weekDay: DayOfWeek.Friday,
        meals: [...meals],
      },
      {
        weekDay: DayOfWeek.Saturday,
        meals: [...meals],
      },
    ];
    const week = new this.weekModel({
      family: familyId,
      firstDay: startDate,
      days,
    });
    return week.save();
  }
}
