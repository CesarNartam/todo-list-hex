import { CreateTaskUseCase } from "../application/use-cases/CreateTaskUseCase";
import { GetTaskUseCase } from "../application/use-cases/GetTaskUseCase";
import { ListTasksUseCase } from "../application/use-cases/ListTasksUseCase";
import { UpdateTaskUseCase } from "../application/use-cases/UpdateTaskUseCase";
import { DeleteTaskUseCase } from "../application/use-cases/DeleteTaskUseCase";
import { TaskController } from "./Controllers/TaskController";
import { DataTaskRepository } from "./Repositories/DataTaskRepository";

const taskRepository = new DataTaskRepository();

const createTaskUseCase = new CreateTaskUseCase(taskRepository);
const getTaskUseCase = new GetTaskUseCase(taskRepository);
const listTasksUseCase = new ListTasksUseCase(taskRepository);
const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);

export const taskController = new TaskController(
    createTaskUseCase,
    getTaskUseCase,
    listTasksUseCase,
    updateTaskUseCase,
    deleteTaskUseCase
);