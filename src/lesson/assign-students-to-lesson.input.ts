import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class AssignStudentToLessonInput {
  @IsNotEmpty()
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  @IsNotEmpty()
  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  studentIds: string[];
}
