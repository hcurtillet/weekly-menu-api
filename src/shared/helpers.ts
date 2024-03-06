import { BaseSchema } from '@shared/schema';
import { BaseDto } from '@shared/dto';

export const formatStringToDate = (date: string): Date => {
  const year = parseInt(date.substring(0, 4));
  const month = parseInt(date.substring(4, 6));
  const day = parseInt(date.substring(6, 8));
  return new Date(year, month - 1, day);
};

export const formatBaseDto = (entity: BaseSchema): BaseDto => ({
  id: entity.id,
  createdAt: entity.createdAt,
  updatedAt: entity.updatedAt,
});
