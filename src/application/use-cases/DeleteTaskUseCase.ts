import { TaskRepository } from '../../domain/Repositories/TaskRepository';
//import { Task } from '../../domain/Entities/Task';
import signale from 'signale';

export class DeleteTaskUseCase {
    constructor(readonly taskRepository: TaskRepository) {}

    async execute(uuid: string): Promise<boolean> {
        try {
            return await this.taskRepository.deleteTask(uuid);
        } catch (error) {
            signale.error(error);
            return false;
        }
    }
}