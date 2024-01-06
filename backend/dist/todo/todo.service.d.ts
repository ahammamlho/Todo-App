import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoDto } from './dto/todo.dto';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    createTodo(todo: TodoDto): Promise<void>;
    getTodo(id: string): Promise<Todo | []>;
    getAllTodos(): Promise<Todo[]>;
    updateTodo(id: string, todo: TodoDto): Promise<void>;
    updateStatus(id: string): Promise<void>;
    deleteTodo(id: string): Promise<void>;
}
