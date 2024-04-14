import { useRef, FormEvent } from "react"
import classes from "./todo-input.module.css"
import useTodos from "../../hooks/use-todos"
import { createTodo } from "../../services/todo-service"

export default function TodoInput() {
  const { todoData, todoMutate } = useTodos()
  const inputRef = useRef<HTMLInputElement>(null)

  const resetInputValue = () => (inputRef.current!.value = "")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const newTodo = { title: inputRef.current?.value }
      const responseData = await createTodo(newTodo)
      todoMutate({ ...todoData, data: [...todoData.data, responseData.data] })
      resetInputValue()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className={classes["todo-form"]} onSubmit={handleSubmit}>
      <input type="text" placeholder="할 일을 입력해" className={classes["todo-input"]} ref={inputRef} />
      <button className={classes["todo-submit"]}>만들기</button>
    </form>
  )
}
