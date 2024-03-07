import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Person {
  @Field()
  personId: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;

  @Field({ nullable: true })
  isSubscribed?: boolean;
}
