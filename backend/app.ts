import express, { json } from "express"
import type { Express, Request, Response, NextFunction } from "express"
import mongoose from "mongoose"
import "dotenv/config"
import HttpError from "./utils/http-error"
import todoRouter from "./routes/todo-route"
import cors from "cors"
import TodoModel from "./models/todo-model"

class App {
  public PORT: string | number
  public DB_PASSWORD: string
  private app: Express

  constructor(app: Express) {
    this.app = app
    this.PORT = process.env.PORT || 4000
    this.DB_PASSWORD = process.env.DB_PASSWORD!

    this.setMiddleware()
    this.startDatabase()
  }

  setMiddleware() {
    this.app.use(cors())
    this.app.use(json())

    this.app.use("/", todoRouter)

    this.app.use((req, res, next) => {
      const error = new HttpError("페이지를 찾을 수 없어요", 404)
      throw error
    })

    this.app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
      if (res.headersSent) return next(error)
      res.status(error.statusCode || 500).json({ message: error.message || "알 수 없는 에러가 발생했어요" })
    })
  }

  async startDatabase() {
    try {
      // 본인 클러스터를 만들어 여기에 연결해주세요.
      await mongoose.connect(
        `mongodb+srv://dong5ffice:${this.DB_PASSWORD}@practice-todos.wa2mtbe.mongodb.net/?retryWrites=true&w=majority&appName=Practice-Todos`
      )
      this.app.listen(this.PORT, () => console.log(`listening at PORT ${this.PORT}`))
    } catch (error) {
      console.log("Listening Server Error")
    }
  }
}

const app = new App(express())
