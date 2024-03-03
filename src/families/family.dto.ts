import { UserDto } from '@users/user.dto';
import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class FamilyDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString({
    message: 'Description must be a string',
  })
  @ValidateIf((object, value) => value !== undefined)
  readonly description?: string;
  readonly members: UserDto[];
}

export class AddMemberDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;
}
