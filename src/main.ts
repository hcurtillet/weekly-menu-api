import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';
import * as compression from 'compression';

const PORT = process.env.PORT || 3000;
console.log('PORT', PORT);
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
