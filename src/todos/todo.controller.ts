import { Body, Get, Controller, Post } from '@nestjs/common'; // Thêm 'Post' ở đây nếu bạn muốn xác định phương thức HTTP POST
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodoService } from './todos.service';
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post() // Thêm decorator cho phương thức HTTP POST
  create(@Body() dto: CreateTodoDto) {
    // Đổi thành CreateTodoDto ở đây
    return this.todoService.create(dto); // Sửa thành this.todoService
  }
  @Get()
  findAll() {
    return ' pham vanhai';
  }
  @Get()
  findAllUser(@Body() dto: CreateTodoDto) {
  
  }
}
