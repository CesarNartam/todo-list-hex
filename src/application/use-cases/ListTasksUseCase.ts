import { Task } from "../../domain/Entities/Task";
import { TaskRepository } from "../../domain/Repositories/TaskRepository";
import signale from "signale";

export class ListTasksUseCase {
    constructor(readonly taskRepository: TaskRepository) {}

    async execute(): Promise<Task|any> {
        try {
            return await this.taskRepository.listTasks( );
        } catch (error) {
            signale.error(error);
            return null;
        }
    }
}