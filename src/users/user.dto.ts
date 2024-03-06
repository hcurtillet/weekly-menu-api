import { IsNotEmpty, IsString } from 'class-validator';
import { BaseDto } from '@shared/dto';

export class UserDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
}
