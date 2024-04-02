"use server"
import prisma from "@/prisma/client";

const getTodos = async () => {

    const todos = await prisma.todo.findMany();
    return todos;
}

export { getTodos}