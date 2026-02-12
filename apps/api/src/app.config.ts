import { Injectable } from '@nestjs/common';
import { EnvGetterService } from 'nestjs-env-getter';
import { version } from 'package.json';

@Injectable()
export class AppConfig {
  readonly port: number;
  readonly host: string;
  readonly serviceName: string;
  readonly serviceDescription: string;
  readonly version: string;
  readonly apiPrefix: string;
  readonly isDevelopment: boolean;

  constructor(private readonly envGetter: EnvGetterService) {
    this.isDevelopment =
      this.envGetter.getOptionalEnv('NODE_ENV', 'dev') === 'dev';
    this.port = this.envGetter.getRequiredNumericEnv('PORT');
    this.host = this.envGetter.getOptionalEnv('HOST', '0.0.0.0');
    this.serviceName = this.envGetter.getOptionalEnv('SERVICE_NAME', 'service');
    this.serviceDescription = this.envGetter.getOptionalEnv(
      'SERVICE_DESCRIPTION',
      'API Service',
    );
    this.version = this.envGetter.getOptionalEnv('VERSION', version);
    this.apiPrefix = this.envGetter.getOptionalEnv('API_PREFIX', 'api');
  }
}
