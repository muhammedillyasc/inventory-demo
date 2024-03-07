import { Injectable } from '@nestjs/common';
import { Person } from './models/person';
import { CreatePersonInput } from './dto/inputs/craete-user.input';
import { GetPersonArgs } from './dto/args/get-person.args';
import { GetPersonsArgs } from './dto/args/get-persons.args';

@Injectable() // we can use this othjer places
export class PersonsService {
  private persons: Person[] = [];

  public createPerson(createPersonData: CreatePersonInput): Person {
    const person: Person = {
      personId: '1',
      ...createPersonData,
    };
    this.persons.push(person);

    return person;
  }

  public getPerson(getPersonArgs: GetPersonArgs): Person {
    return this.persons.find(
      (user) => user.personId === getPersonArgs.personId,
    );
  }

  public getPersons(getPersonsArgs: GetPersonsArgs): Person[] {
    return getPersonsArgs.personIds.map((userId) =>
      this.getPerson({ personId: userId }),
    );
  }
}
