import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { AppModule } from './app.module';

const PORT = process.env.PORT;

async function main() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  await app.listen(PORT);

  console.log(`app listens on port ${PORT}`);
}

main();
