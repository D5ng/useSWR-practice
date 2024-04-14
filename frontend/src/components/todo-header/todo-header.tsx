import React from "react"
import classes from "./todo-header.module.css"

export default function TodoHeader() {
  return (
    <header className={classes["todo-header"]}>
      <h1 className={classes["todo-header__title"]}>TodoList (Feat.useSWR)</h1>
      <p className={classes["todo-header__desc"]}>투두리스트를 만들면서 useSWR을 잘 사용해보자.</p>
    </header>
  )
}
