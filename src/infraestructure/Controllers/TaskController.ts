import { CreateTaskUseCase } from "../../application/use-cases/CreateTaskUseCase";
import { GetTaskUseCase } from "../../application/use-cases/GetTaskUseCase";
import { ListTasksUseCase } from "../../application/use-cases/ListTasksUseCase";
import { UpdateTaskUseCase } from "../../application/use-cases/UpdateTaskUseCase";
import { DeleteTaskUseCase } from "../../application/use-cases/DeleteTaskUseCase";
import { Request, Response } from "express";
import { TaskInterface } from "../../domain/Entities/Interfaces/TaskInterface";

export class TaskController {
    constructor(readonly createTaskUseCase: CreateTaskUseCase, readonly getTaskUseCase: GetTaskUseCase, readonly listTasksUseCase: ListTasksUseCase, readonly updateTaskUseCase: UpdateTaskUseCase, readonly deleteTaskUseCase: DeleteTaskUseCase) {}

    async createTask(req: Request, res: Response) {
        const {name, description, status } = req.body;
        const task = await this.createTaskUseCase.execute(name, description, status);
        res.status(201).json(task);

    }

    async getTask(req: Request, res: Response) {
        const {uuid} = req.params;
        const task = await this.getTaskUseCase.execute(uuid);
        task ? res.status(200).json(task) : res.status(404).json({message: "Tarea no encontrada"});
    }

    async listTasks(req: Request, res: Response) {
        const tasks = await this.listTasksUseCase.execute();
        res.status(200).json(tasks);
    }

    async updateTask(req: Request, res: Response) {
        const {uuid} = req.params;
        const {name, description, status} = req.body;
        const requestBody: TaskInterface = {
            uuid: "",
            name,
            description,
            status,
        }

        const task = await this.updateTaskUseCase.execute(uuid, requestBody);
        task ? res.status(200).json(task): res.status(404).json({message: "Tarea no encontrada"});
    }

    async deleteTask(req: Request, res: Response){
        const {uuid} = req.params;
        await this.deleteTaskUseCase.execute(uuid);
        res.status(204).json({message: "Tarea eliminada"});
    }

}
