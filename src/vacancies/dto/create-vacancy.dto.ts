import { Prop } from '@nestjs/mongoose';

export class CreateVacancyDto {
  @Prop()
  id: string;

  @Prop()
  status: number;
}
