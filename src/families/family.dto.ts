import { UserDto } from '@users/user.dto';

export class FamilyDto {
  readonly name: string;
  readonly description: string;
  readonly members: UserDto[];
}
