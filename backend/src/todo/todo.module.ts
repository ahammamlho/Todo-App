import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  providers: [PrismaService, TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
