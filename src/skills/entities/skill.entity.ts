import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Skill {
  @Prop()
  id: string;

  @Prop()
  text: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
