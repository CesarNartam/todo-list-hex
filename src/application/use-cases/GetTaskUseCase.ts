import { Task } from "../../domain/Entities/Task";
import { TaskRepository } from "../../domain/Repositories/TaskRepository";
import signale from "signale";

export class GetTaskUseCase {
    constructor(readonly taskRepository: TaskRepository) {}

    async execute(uuid: string): Promise<Task|any> {
        try {
            return await this.taskRepository.getTask(uuid);
        } catch (error) {
            signale.error(error);
            return null;
        }
    }
}