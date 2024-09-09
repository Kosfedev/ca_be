import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

class IdNamePair {
  @Prop()
  id: string;

  @Prop()
  name: string;
}

class Salary {
  @Prop()
  currency: string;

  @Prop()
  gross: boolean;

  @Prop()
  from: number;

  @Prop()
  to: number;
}

@Schema()
export class Vacancy {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  published_at: string;

  @Prop({ type: IdNamePair })
  employment;

  @Prop({ type: IdNamePair })
  experience;

  @Prop({ type: IdNamePair })
  schedule;

  @Prop({ type: Salary })
  salary;

  @Prop()
  status: number;
}

export const VacancySchema = SchemaFactory.createForClass(Vacancy);
