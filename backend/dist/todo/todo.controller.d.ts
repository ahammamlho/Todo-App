import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    createTodo(todo: TodoDto): Promise<void>;
    getTodo(id: string): Promise<any>;
    getAllTodos(): Promise<Todo[]>;
    updateTodo(id: string, todo: TodoDto): Promise<void>;
    updateStatus(id: string): Promise<void>;
    deleteTodo(id: string): Promise<void>;
}
