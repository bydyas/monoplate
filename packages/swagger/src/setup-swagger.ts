import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export interface ISwaggerSetupOptions {
  title: string;
  description: string;
  version: string;
  prefix?: string;
}

export function setupSwagger(
  app: INestApplication,
  options: ISwaggerSetupOptions,
): void {
  const config = new DocumentBuilder()
    .setTitle(options?.title ?? 'API')
    .setDescription(options?.description ?? 'API docs')
    .setVersion(options?.version ?? '1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(options.prefix ?? 'docs', app, document);
}
