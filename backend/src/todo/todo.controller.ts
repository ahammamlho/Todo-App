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
import { TodoDto } from './dto/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('create')
  async createTodo(@Body() todo: TodoDto) {
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
  async updateTodo(@Param('id') id: string, @Body() todo: TodoDto) {
    return await this.todoService.updateTodo(id, todo);
  }

  @Patch('updateStatus/:id')
  async updateStatus(@Param('id') id: string) {
    return await this.todoService.updateStatus(id);
  }

  @Delete('delete/:id')
  async deleteTodo(@Param('id') id: string) {
    return await this.todoService.deleteTodo(id);
  }
}
