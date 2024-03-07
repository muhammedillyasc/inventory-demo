import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonsResolver } from './persons.resolver';
import { PersonSchema } from './schemas/person.shema';
import { PersonsService } from './persons.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'person', schema: PersonSchema }]),
  ],
  providers: [PersonsResolver, PersonsService],
}) // decorator, tell what is below
export class PersonsModule {}
