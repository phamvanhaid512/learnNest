import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todos.entity';
import { TodoService } from './todos.service';
import { TodoController } from './todo.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
   providers: [TodoService],
})
export class TodosModule {}
