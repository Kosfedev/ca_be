import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VacanciesModule } from './vacancies/vacancies.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_CLOUD_URI}`),
    VacanciesModule,
    SkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
