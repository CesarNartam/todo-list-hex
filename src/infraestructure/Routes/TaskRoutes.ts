import express from 'express';
import { taskController } from '../dependencies';

export const taskRouter = express.Router();

taskRouter.post(
    "/",
    taskController.createTask.bind(taskController)
);

taskRouter.get(
    "/:uuid",
    taskController.getTask.bind(taskController)
);

taskRouter.get(
    "/",
    taskController.listTasks.bind(taskController)
);

taskRouter.put(
    "/:uuid",
    taskController.updateTask.bind(taskController)
);

taskRouter.delete(
    "/:uuid",
    taskController.deleteTask.bind(taskController)
);
