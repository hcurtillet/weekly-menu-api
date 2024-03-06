import { UserDto } from '@users/user.dto';
import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { BaseDto } from '@shared/dto';

export class FamilyDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @ValidateIf((_, value) => value !== undefined)
  readonly description?: string;
  readonly members: UserDto[];
}

export class AddMemberDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;
}
