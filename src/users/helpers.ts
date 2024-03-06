import { User } from '@users/user.schema';
import { UserDto } from '@users/user.dto';
import { formatBaseDto } from '@shared/helpers';

export const formatUser = (user: User): UserDto => ({
  ...formatBaseDto(user),
  name: user.name,
  email: user.email,
});
