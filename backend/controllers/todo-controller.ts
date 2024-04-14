import { RequestHandler } from "express"
import TodoService from "../service/todo-service"
import HttpError from "../utils/http-error"

export const getTodo: RequestHandler = async (req, res, next) => {
  try {
    const { todoId } = req.params
    if (!todoId) throw new HttpError("todoId가 없습니다.", 400)
    const todo = await TodoService.getTodo(todoId)
    return res.status(200).json(todo)
  } catch (error) {
    const err = error as HttpError
    return {
      success: false,
      message: err.message,
    }
  }
}

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    const todo = await TodoService.getTodos()
    return res.status(200).json(todo)
  } catch (error) {
    const err = error as HttpError
    return {
      success: false,
      message: err.message,
    }
  }
}

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const { title } = req.body as { title: string }
    if (!title) throw new HttpError("타이틀은 필수 입력 값이에요.", 400)
    const todo = await TodoService.createTodo(title)
    return res.status(200).json(todo)
  } catch (error) {
    const err = error as HttpError
    return {
      success: false,
      message: err.message,
    }
  }
}

export const deleteTodo: RequestHandler = async (req, res, next) => {
  try {
    const { todoId } = req.body as { todoId: string }
    if (!todoId) throw new HttpError("todoId가 없습니다.", 400)
    const todo = await TodoService.deleteTodo(todoId)
    return res.status(200).json(todo)
  } catch (error) {
    const err = error as HttpError
    return {
      success: false,
      message: err.message,
    }
  }
}

export const updateTodo: RequestHandler = async (req, res, next) => {
  try {
    const { todoId } = req.body as { todoId: string }
    if (!todoId) throw new HttpError("todoId가 없습니다.", 400)
    const todo = await TodoService.updateTodo(todoId)
    return res.status(200).json(todo)
  } catch (error) {
    const err = error as HttpError
    return {
      success: false,
      message: err.message,
    }
  }
}
