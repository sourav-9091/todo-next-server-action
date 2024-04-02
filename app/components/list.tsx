"use client"

import React from 'react'
import { getTodos } from "@/app/actions/todosGetAction";

const List = async () => {
    const todos = await getTodos();
  return (
    <ul className="list-disc">
    {todos.map((todo) => (
      <li key={todo.id}>{todo.title}</li>
    ))}
  </ul>
  )
}

export default List