import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(7000);
}

main();
