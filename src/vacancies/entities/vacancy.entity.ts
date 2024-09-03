import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Vacancy {
  @Prop()
  id: string;

  @Prop()
  status: number;
}

export const VacancySchema = SchemaFactory.createForClass(Vacancy);
