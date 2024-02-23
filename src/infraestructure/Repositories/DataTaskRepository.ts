import { Task } from "../../domain/Entities/Task";
import { TaskRepository } from "../../domain/Repositories/TaskRepository";
import { tasks } from "../data-db/db";

export class DataTaskRepository implements TaskRepository {
    private initialTasks: Task[] = tasks;

    createTask(task: Task): Promise<any> {
        tasks.push(task);
        return Promise.resolve(task);
    }

    getTask(uuid: string): Promise<Task | any> {
        const task = tasks.find((task) => task.uuid === uuid);
        return Promise.resolve(task);
    }

    listTasks(): Promise<Task[]> {
        return Promise.resolve(this.initialTasks);
    }

    updateTask(uuid: string, task: Task): Promise <Task|null> {
        const taskIndex = tasks.findIndex(task => task.uuid === uuid);
        if (taskIndex === -1){
            return Promise.resolve(null);
        }

        tasks[taskIndex] = task;
        return Promise.resolve(task);
    }

    deleteTask(uuid: string): Promise<null> {
        tasks.splice(tasks.findIndex(task => task.uuid === uuid), 1);
        return Promise.resolve(null);
    }
}