import { Family } from './family.schema';
import { FamilyDto } from './family.dto';
import { formatUser } from '@users/helpers';
import { formatBaseDto } from '@shared/helpers';

export const formatFamily = (family: Family): FamilyDto => ({
  ...formatBaseDto(family),
  name: family.name,
  description: family.description,
  members: family.users.map(formatUser),
});
