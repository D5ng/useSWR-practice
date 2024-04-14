import { Router } from "express"
import * as TodoRoutes from "../controllers/todo-controller"

const todoRouter = Router()

todoRouter.get("/todos", TodoRoutes.getTodos)

todoRouter.get("/todo:id", TodoRoutes.getTodo)

todoRouter.post("/todo", TodoRoutes.createTodo)

todoRouter.delete("/todo", TodoRoutes.deleteTodo)

todoRouter.patch("/todo", TodoRoutes.updateTodo)

export default todoRouter
