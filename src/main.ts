import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from './core/config/env';
import { GlobalExceptionFilter } from './core/shared/errors/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Gerenciador de Dispensa API')
    .setDescription('API para gerenciar uma dispensa de alimentos')
    .setVersion('1.0')
    .addTag('dispensa')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT ?? 3000);

  app.useGlobalFilters(new GlobalExceptionFilter());
  console.log(`🚀 HTTP server running on port: ${process.env.PORT ?? 3000}`);
  console.log(`📄 Docs available at http://localhost:${process.env.PORT ?? 3000}/api`);

}


bootstrap();
