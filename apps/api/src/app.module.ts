import { Module } from '@nestjs/common';
import { AppConfigModule } from 'nestjs-env-getter';
import { HealthModule } from '@core/health';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AppConfig } from './app.config';

@Module({
  imports: [
    AppConfigModule.forRoot({ useClass: AppConfig }),
    HealthModule.forRootAsync({
      useFactory: ({ swaggerOptions }: AppConfig) => ({
        name: swaggerOptions.title,
      }),
      inject: [AppConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
