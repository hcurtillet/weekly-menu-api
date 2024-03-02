import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '@users/users.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { FamiliesModule } from './families/families.module';
import { WeeksModule } from './weeks/weeks.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI, {
      auth: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
      },
    }),
    UsersModule,
    FamiliesModule,
    WeeksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
