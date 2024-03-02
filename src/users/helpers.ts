import { User } from '@users/user.schema';
import { UserDto } from '@users/user.dto';

export const formatUser = (user: User): UserDto => ({
  name: user.name,
  email: user.email,
});
