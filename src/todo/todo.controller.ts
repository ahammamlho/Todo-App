import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('create')
  async createTodo(@Body() todo: any) {
    return await this.todoService.createTodo(todo);
  }

  @Get('todo/:id')
  async getTodo(@Param('id') id: string) {
    return await this.todoService.getTodo(id);
  }

  @Get('alltodos')
  async getAllTodos() {
    console.log('sjfhsldhgfl');
    return await this.todoService.getAllTodos();
  }
}
