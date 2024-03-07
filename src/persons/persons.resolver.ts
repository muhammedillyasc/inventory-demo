import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { Person } from './models/person';
import { PersonsService } from './persons.service';
import { Query } from '@nestjs/common';
import { GetPersonArgs } from './dto/args/get-person.args';
import { CreatePersonInput } from './dto/inputs/craete-user.input';
import { GetPersonsArgs } from './dto/args/get-persons.args';

//resolver responsible for resolving

//will return Pesrson
@Resolver(() => Person)
export class PersonsResolver {
  constructor(private personsService: PersonsService) {}

  @Query(() => Person) // tell what will be the return//say whether nullable or not // we can give different name for the query also
  // by default name of the methid we can override
  // resolver will communicate with service
  // we use args to tell service which person we trying to access
  getPerson(@Args() getPersonArgs: GetPersonArgs): Person {
    return this.personsService.getPerson(getPersonArgs);
  }

  //   @Query(() => [Person])
  //   getPersons(@Args() getPersonsArgs: GetPersonsArgs): Person[] {
  //     return this.personsService.getPersons(getPersonsArgs);
  //   }

  //   @Query(() => [Person])
  //   getPersons(
  //     @Args() getPersonsArgs: GetPersonsArgs,
  //     // Add your pipes here if needed
  //     // Example: @UsePipes(YourPipe)
  //   ): Person[] {
  //     return this.personsService.getPersons(getPersonsArgs);
  //   }

  @Mutation(() => Person)
  createPerson(
    @Args('createPersonData') createPersonInput: CreatePersonInput,
  ): Person {
    return this.personsService.createPerson(createPersonInput);
  }
}
