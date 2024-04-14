import classes from "./todo-list.module.css"
import useTodos from "../../hooks/use-todos"
import TodoItem from "./todo-item"

export default function TodoList() {
  const { todoData, isLoading, error, isValidating } = useTodos()

  if (error) {
    return <p>Error가 발생했어요</p>
  }

  return (
    <ul className={classes["todo-list"]}>
      {(isLoading || isValidating) && <li>Loading....</li>}
      {todoData?.data?.length === 0 && <li>할 일을 추가해주세요.</li>}
      {todoData?.data?.map((item: any) => (
        <TodoItem key={item._id} item={item} />
      ))}
    </ul>
  )
}
