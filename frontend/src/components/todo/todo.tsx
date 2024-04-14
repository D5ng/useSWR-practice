import classes from "./todo.module.css"
import TodoHeader from "../todo-header/todo-header"
import TodoInput from "../todo-input/todo-input"
import TodoList from "../todo-list/todo-list"

export default function Todo() {
  return (
    <div className={classes.center}>
      <div className={classes.todo}>
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}
