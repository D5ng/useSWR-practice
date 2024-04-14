import { NextFunction, Request, RequestHandler, Response } from "express"
import TodoModel from "../models/todo-model"
import HttpError from "../utils/http-error"

class TodoServiceClass {
  private TodoModel: typeof TodoModel
  constructor(todoModel: typeof TodoModel) {
    this.TodoModel = todoModel
  }

  async getTodos() {
    try {
      const todos = await this.TodoModel.find({})
      return {
        success: true,
        data: todos,
      }
    } catch (error) {
      throw new HttpError("알 수 없는 이유로 요청에 실패했어요", 500)
    }
  }

  async getTodo(todoId: string) {
    try {
      const todo = await this.TodoModel.findById(todoId)
      return {
        success: true,
        data: todo,
      }
    } catch (error) {
      throw new HttpError("알 수 없는 이유로 요청에 실패했어요", 500)
    }
  }

  async createTodo(title: string) {
    if (!title) throw new HttpError("타이틀은 필수 입력 값이에요.", 400)

    try {
      const newTodo = new this.TodoModel({ title, onComplete: false })
      if (!newTodo) throw new HttpError("할 일 목록을 생성하는데 에러가 발생했어요.", 500)
      await newTodo.save()

      return {
        success: true,
        data: newTodo,
      }
    } catch (error) {
      throw new HttpError("알 수 없는 이유로 요청에 실패했어요", 500)
    }
  }

  async deleteTodo(todoId: string) {
    try {
      const deleteTodo = await this.TodoModel.findByIdAndDelete(todoId)
      if (!deleteTodo) throw new HttpError("할 일 목록을 삭제하는데 에러가 발생했어요.", 500)
      console.log(deleteTodo)

      return {
        success: true,
        data: deleteTodo,
      }
    } catch (error) {
      throw new HttpError("알 수 없는 이유로 요청에 실패했어요", 500)
    }
  }

  async updateTodo(todoId: string) {
    try {
      const todo = await this.TodoModel.findById(todoId)
      if (!todo) throw new HttpError("투두 아이디를 가져오는데 실패했어요", 500)

      const updateTodo = await this.TodoModel.findByIdAndUpdate(todoId, { onComplete: !todo.onComplete })
      if (!updateTodo) throw new HttpError("할 일 목록을 수정하는데 에러가 발생했어요.", 500)

      return {
        success: true,
        data: updateTodo,
      }
    } catch (error) {
      throw new HttpError("알 수 없는 이유로 요청에 실패했어요", 500)
    }
  }
}

const TodoService = new TodoServiceClass(TodoModel)

export default TodoService
