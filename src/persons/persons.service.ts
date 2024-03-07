import { Injectable } from '@nestjs/common';

import { CreatePersonInput } from './dto/inputs/craete-user.input';
import { GetPersonArgs } from './dto/args/get-person.args';
import { Person } from './dto/persons.dto';

@Injectable() // we can use this othjer places
export class PersonsService {
  private persons: Person[] = [
    {
      personId: 1,
      email: 'ff',
      age: 22,
      isSubscribed: false,
    },
  ];

  public createPerson(createPersonData: CreatePersonInput): Person {
    const person: Person = {
      personId: 1,
      ...createPersonData,
    };
    this.persons.push(person);

    return person;
  }

  async getPerson(getPersonArgs: GetPersonArgs): Promise<Person> {
    return this.persons.find((p) => p.personId === getPersonArgs.personId);
  }

  public getPersons(): Person[] {
    return this.persons;
  }
}
