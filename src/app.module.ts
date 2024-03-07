import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PersonsModule } from './persons/persons.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  //  imports: [MongooseModule.forRoot('mongodb://localhost/demo'), UsersModule],

  //schema first approach
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    PersonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
