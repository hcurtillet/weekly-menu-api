import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';
import * as compression from 'compression';
import process from 'process';

console.log('process env', process.env);
const PORT = 3000;
console.log('PORT', PORT);
console.log('database uri', process.env.DATABASE_URI);
console.log('database name', process.env.DATABASE_NAME);
console.log('database user', process.env.DATABASE_USER);
console.log('database pass', process.env.DATABASE_PASS);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe({}));
  app.enableVersioning({ type: VersioningType.URI });
  app.use(helmet());
  app.use(compression());
  await app.listen(PORT, () => {
    console.log(`🚀 Application running at port ${PORT}`);
  });
}
bootstrap();
