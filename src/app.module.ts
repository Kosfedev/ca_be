import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VacanciesModule } from './vacancies/vacancies.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_CLOUD_URI}`),
    VacanciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
