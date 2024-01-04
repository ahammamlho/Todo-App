import { Injectable } from '@nestjs/common';

import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async createTodo(todo: any) {
    await this.prisma.todo.create({
      data: todo,
    });
  }

  async getTodo(id: string): Promise<Todo> {
    const todo = await this.prisma.todo.findUnique({ where: { id } });
    return todo;
  }

  async getAllTodos(): Promise<Todo[]> {
    const todos = await this.prisma.todo.findMany();
    return todos;
  }
}
