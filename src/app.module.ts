import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/demo'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
