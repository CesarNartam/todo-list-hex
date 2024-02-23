import { Task } from "../Entities/Task";

export interface TaskRepository {
    createTask(task:Task):Promise<Task|any>;
    getTask(uuid: string):Promise<Task|any>;
    listTasks():Promise<Task[]>;
    updateTask(uuid: string, task: Task):Promise<Task|null>;
    deleteTask(uuid: string):Promise<Task|null>;
}