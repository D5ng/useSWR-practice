import classes from "./todo-item.module.css"
import useTodos from "../../hooks/use-todos"
import { deleteTodo, updateTodo } from "../../services/todo-service"

export default function TodoItem(props: any) {
  const { todoData, todoMutate } = useTodos()

  const handleTodoDelete = async (todoId: string) => {
    const filteredTodo = todoData.data.filter((todo: any) => todo._id !== todoId)
    await deleteTodo(todoId)
    todoMutate({ ...todoData, data: filteredTodo })
  }

  const handleTodoUpdate = async (todoId: string) => {
    const updatedTodo = todoData.data.map((todo: any) =>
      todo._id === todoId ? { ...todo, onComplete: !todo.onComplete } : todo
    )
    await updateTodo(todoId)
    todoMutate({ ...todoData, data: updatedTodo })
  }

  const todoItemClass = props.item.onComplete
    ? `${classes["todo-list__item"]} ${classes["todo-active"]}`
    : classes["todo-list__item"]

  return (
    <li key={props.item._id} className={todoItemClass}>
      <span>{props.item.id}</span>
      <strong>{props.item.title}</strong>
      <button
        type="button"
        onClick={handleTodoUpdate.bind(null, props.item._id)}
        className={`${classes["todo-button__done"]} ${classes["todo-button"]}`}
      >
        완료
      </button>
      <button
        type="button"
        onClick={handleTodoDelete.bind(null, props.item._id)}
        className={`${classes["todo-button__delete"]} ${classes["todo-button"]}`}
      >
        삭제
      </button>
    </li>
  )
}
