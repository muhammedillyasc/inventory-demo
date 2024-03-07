import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

//ew can add validations also for our input

@ArgsType()
export class GetPersonsArgs {
  @Field(() => [String]) // specify array of strings
  @IsArray() // the personIds argumants must be array, that check will happen here
  personIds: string[];
}
