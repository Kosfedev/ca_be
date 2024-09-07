import { Prop } from '@nestjs/mongoose';

export class CreateSkillDto {
  @Prop()
  id: string;

  @Prop()
  text: string;
}
