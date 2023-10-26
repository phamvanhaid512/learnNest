import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './cats/common/middleware/logger.middleware';
import { CastModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './configs/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './user/user.entity'
import { UsersModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}