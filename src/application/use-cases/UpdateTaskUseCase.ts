import { TaskInterface } from "../../domain/Entities/Interfaces/TaskInterface";
import { Task } from "../../domain/Entities/Task";
import { TaskRepository } from "../../domain/Repositories/TaskRepository";

export class UpdateTaskUseCase {
    constructor(readonly taskRepository: TaskRepository) {}

    async execute(uuid: string, task: TaskInterface): Promise<Task|any> {
        const existingTask = await this.taskRepository.getTask(uuid);
        if (!existingTask){
            return null;
        }
        existingTask.name = task.name;
        existingTask.description = task.description;
        existingTask.status = task.status;

        return this.taskRepository.updateTask(uuid, existingTask);
    }
}