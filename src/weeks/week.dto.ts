import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWeekDto {
  @IsString()
  @IsNotEmpty()
  readonly familyId: string;
  @IsString()
  @IsNotEmpty()
  readonly startDate: string;
}
