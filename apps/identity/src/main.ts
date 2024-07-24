import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NextFunction, Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle(``)
    .setDescription(``)
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.originalUrl == '/' || req.originalUrl.includes('favicon.ico')) {
      return res.send('favicon.ico');
    }
    return next();
  });

  const port = 3001;
  await app.listen(port);
  Logger.log(`Application is running on: http:localhost:${port}`);
}
bootstrap();
