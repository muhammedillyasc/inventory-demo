import { Module } from '@nestjs/common';
import { PersonsResolver } from './persons.resolver';
import { PersonsService } from './persons.service';

@Module({
  providers: [PersonsResolver, PersonsService],
}) // decorator, tell what is below
export class PersonsModule {}
