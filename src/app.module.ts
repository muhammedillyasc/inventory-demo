import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PersonsModule } from './persons/persons.module';
import { ApolloDriver } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  //  imports: [MongooseModule.forRoot('mongodb://localhost/demo'), UsersModule],

  //schema first approach
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
      context: ({ req, res }) => ({ req, res }),
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/demo2'),
    PersonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
