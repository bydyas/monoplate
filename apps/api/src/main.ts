import { NestFactory } from '@nestjs/core';
import { setupSwagger } from '@core/swagger';

import { AppConfig } from './app.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get(AppConfig);

  app.enableCors();
  app.setGlobalPrefix(appConfig.swaggerOptions.prefix);
  setupSwagger(app, appConfig.swaggerOptions);

  await app.listen(3000);
}

void bootstrap();
