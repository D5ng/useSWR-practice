import { TODO_API } from "./todo-api"

type FetchParamsType = Parameters<typeof fetch>

export const fetcher = async (...args: FetchParamsType) => {
  const response = await fetch(...args)
  const responseData = await response.json()
  return responseData
}

export const deleteTodo = async (todoId: string) => {
  const response = await fetch(`${TODO_API}/todo`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todoId }),
  })

  const responseData = await response.json()
  return responseData
}

export const createTodo = async (newTodo: any) => {
  const response = await fetch(`${TODO_API}/todo`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newTodo),
  })

  const responseData = await response.json()
  return responseData
}

export const updateTodo = async (todoId: string) => {
  const response = await fetch(`${TODO_API}/todo`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todoId }),
  })

  const responseData = await response.json()
  return responseData
}
