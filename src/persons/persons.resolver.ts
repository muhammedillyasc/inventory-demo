import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

// import { Query } from '@nestjs/common';
// import { GetPersonArgs } from './dto/args/get-person.args';
// import { CreatePersonInput } from './dto/inputs/craete-user.input';
// import { Person } from './dto/persons.dto';
import { PersonsService } from './persons.service';
import { Person } from './dto/persons.dto';
import { GetPersonArgs } from './dto/args/get-person.args';
import { CreatePersonInput } from './dto/inputs/craete-user.input';

//resolver responsible for resolving

//will return Pesrson
@Resolver()
export class PersonsResolver {
  constructor(private readonly personsService: PersonsService) {}
  // tell what will be the return//say whether nullable or not // we can give different name for the query also
  // by default name of the methid we can override
  // resolver will communicate with service
  // we use args to tell service which person we trying to access
  @Query(() => Person)
  async getPerson(@Args() getPersonArgs: GetPersonArgs): Promise<Person> {
    return this.personsService.getPerson(getPersonArgs);
  }
  // @Query(() => [Person])
  // getPersons(@Args() getPersonsArgs: GetPersonsArgs): any {
  //   return this.personsService.getPersons(getPersonsArgs);
  // }
  //   @Query(() => [Person])
  //   getPersons(
  //     @Args() getPersonsArgs: GetPersonsArgs,
  //     // Add your pipes here if needed
  //     // Example: @UsePipes(YourPipe)
  //   ): Person[] {
  //     return this.personsService.getPersons(getPersonsArgs);
  // }
  @Mutation(() => Person)
  createPerson(
    @Args('createPersonData') createPersonData: CreatePersonInput,
  ): Person {
    return this.personsService.createPerson(createPersonData);
  }
}
