import { Router } from "express";
import { addTaskSchema, editTaskSchema, validateTask } from "./Middlewares/validate.middleware.js";
import { createTask, deleteTask, editTask, getAllTasks, getTaskById } from "./task.controllers.js";
import { checkVisibility } from "./Middlewares/task.middlewares.js";


const taskRouter = Router()

taskRouter.route("/").get(getAllTasks).post(validateTask(addTaskSchema), createTask)
taskRouter.route("/:id").get(checkVisibility, getTaskById).put(validateTask(editTaskSchema), editTask).delete(deleteTask)

export default taskRouter