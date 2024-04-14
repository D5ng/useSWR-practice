import { model, Schema } from "mongoose"

const todoSchema = new Schema({
  title: { type: String, required: true },
  onComplete: { type: Boolean, required: true },
})

const TodoModel = model("Todo", todoSchema)

export default TodoModel
