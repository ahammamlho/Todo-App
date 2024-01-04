import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
    return await this.todoService.getAllTodos();
  }

  @Patch('update/:id')
  async updateTodo(@Param('id') id: string, @Body() todo: any) {
    return await this.todoService.updateTodo(id, todo);
  }

  @Delete('delete/:id')
  async deleteTodo(@Param('id') id: string) {
    return await this.todoService.deleteTodo(id);
  }
}
