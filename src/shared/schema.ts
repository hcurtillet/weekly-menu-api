import { Prop } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';

export class BaseSchema {
  id: string;
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}
