import useSWR from "swr"
import { TODO_API } from "../services/todo-api"
import { fetcher } from "../services/todo-service"

export default function useTodos() {
  const {
    data: todoData,
    isLoading,
    error,
    isValidating,
    mutate,
  } = useSWR(`${TODO_API}/todos`, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  })

  const todoMutate = (todo: any) => mutate(todo, { revalidate: false })

  return {
    todoData,
    isLoading,
    error,
    isValidating,
    todoMutate,
  }
}
