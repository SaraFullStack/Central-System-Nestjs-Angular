import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common/services/logger.service';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { join } from 'path';
import { AppModule } from './app.module';

const logger = new Logger();
const ENV = process.env['ENV'];
const APP = process.env['APP'];
const PORT = process.env['PORT'] || 3000;
const VERSION = process.env['VERSION'];

logger.setContext(`App: ${APP} * Env: ${ENV}`);

async function bootstrap() {
  try {

    const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

    app.useGlobalPipes(new ValidationPipe());
    app.useStaticAssets(join(__dirname, '../../', 'public'));
    app.setBaseViewsDir([
      __dirname,
      '../../',
      'views',
      __dirname,
      '../../',
      'templates',
    ]),
      app.setViewEngine('pug');

    const options = new DocumentBuilder()
      .setTitle(APP)
      .setDescription(`${APP} - ${ENV}`)
      .setVersion(VERSION)
      .addTag(APP)
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document, {
      swaggerOptions: {
        filter: true,
        docExpansion: "none",
        displayRequestDuration: true
      }
    });

    await app.listen(PORT);

    const url = await app.getUrl();
    logger.verbose(`Server run on: ${url}`);
    logger.verbose(`Api documentation run on: ${url}/api`);
  } catch (error) {
    logger.error(`❌ ${error.message}`);
  }
}
bootstrap();
