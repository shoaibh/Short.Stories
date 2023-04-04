import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class StorySchema {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  created_at: Date;
}
