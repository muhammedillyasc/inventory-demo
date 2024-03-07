import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

//ew can add validations also for our input

@ArgsType()
export class GetPersonArgs {
  @Field()
  @IsNotEmpty()
  personId: number;
}
