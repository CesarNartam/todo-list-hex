import { Task } from "../../domain/Entities/Task";
import { TaskRepository } from "../../domain/Repositories/TaskRepository";
import { v4 as uuidv4 } from "uuid";
import signale from "signale";

export class CreateTaskUseCase {
    constructor(readonly taskRepository: TaskRepository) {}

    async execute(name: string, description: string, status: boolean): Promise<TaskRepository|any> {
        try {
            const uuid = uuidv4();
            const task = new Task(uuid, name, description, status);
            return await this.taskRepository.createTask(task);
        } catch (error) {
            signale.error(error);
            return null;
        }
    }
}