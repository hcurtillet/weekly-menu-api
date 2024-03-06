import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class BaseDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsDate()
  createdAt: Date;
  @IsDate()
  updatedAt: Date;
}
