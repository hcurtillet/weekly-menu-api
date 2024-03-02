import { Family } from './family.schema';
import { FamilyDto } from './family.dto';
import { formatUser } from '@users/helpers';

export const formatFamily = (family: Family): FamilyDto => ({
  name: family.name,
  description: family.description,
  members: family.users.map(formatUser),
});
