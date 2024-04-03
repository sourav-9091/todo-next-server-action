"use client"

import React, { useEffect, useState } from 'react'
import { getTodos } from "@/app/actions/todosGetAction";
import { Todo } from '@prisma/client';

const List = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
      const fetchData = async () => {
          const todos = await getTodos();
          setTodos(todos);
      };
      fetchData();
  }, []);
  return (
    <ul className="list-disc">
    {todos.map((todo) => (
      <li key={todo.id}>{todo.title}</li>
    ))}
  </ul>
  )
}

export default List