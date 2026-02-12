import { NestFactory } from '@nestjs/core';

import { AppConfig } from './app.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get(AppConfig);

  app.enableCors();
  app.setGlobalPrefix(appConfig.apiPrefix);

  await app.listen(3000);
}

void bootstrap();
