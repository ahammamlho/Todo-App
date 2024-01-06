import { Injectable } from '@nestjs/common';

import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async createTodo(todo: TodoDto) {
    await this.prisma.todo.create({
      data: todo,
    });
  }

  async getTodo(id: string): Promise<Todo | []> {
    const todo = await this.prisma.todo.findUnique({
      where: { id, isDelete: false },
    });
    if (!todo) return [];
    return todo;
  }

  async getAllTodos(): Promise<Todo[]> {
    const todos = await this.prisma.todo.findMany({
      where: { isDelete: false },
      orderBy: {
        createdAt: 'desc',
      },
    });
    if (!todos) return [];
    return todos;
  }

  async updateTodo(id: string, todo: TodoDto) {
    await this.prisma.todo.update({
      where: { id },
      data: { todo: todo.todo },
    });
  }

  async updateStatus(id: string) {
    const todo = await this.prisma.todo.findUnique({ where: { id } });
    await this.prisma.todo.update({
      where: { id },
      data: { isDone: !todo.isDone },
    });
  }

  async deleteTodo(id: string) {
    await this.prisma.todo.update({
      where: { id },
      data: { isDelete: true },
    });
  }
}
