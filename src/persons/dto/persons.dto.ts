import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Person {
  @Field()
  personId: number;

  @Field()
  email: string;

  @Field()
  age: number;

  @Field({ nullable: true })
  isSubscribed?: boolean;
}
