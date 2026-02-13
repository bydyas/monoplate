import { ISwaggerSetupOptions } from '@core/swagger';
import { Injectable } from '@nestjs/common';
import { EnvGetterService } from 'nestjs-env-getter';
import { version } from 'package.json';

@Injectable()
export class AppConfig {
  readonly port: number;
  readonly host: string;
  readonly isDevelopment: boolean;
  readonly swaggerOptions: ISwaggerSetupOptions;

  constructor(private readonly envGetter: EnvGetterService) {
    this.isDevelopment =
      this.envGetter.getOptionalEnv('NODE_ENV', 'dev') === 'dev';
    this.port = this.envGetter.getRequiredNumericEnv('PORT');
    this.host = this.envGetter.getOptionalEnv('HOST', '0.0.0.0');
    this.swaggerOptions = {
      title: this.envGetter.getOptionalEnv('SERVICE_NAME', 'service'),
      description: this.envGetter.getOptionalEnv(
        'SERVICE_DESCRIPTION',
        'API Service',
      ),
      version: this.envGetter.getOptionalEnv('VERSION', version),
      prefix: this.envGetter.getOptionalEnv('API_PREFIX', 'api'),
    };
  }
}
