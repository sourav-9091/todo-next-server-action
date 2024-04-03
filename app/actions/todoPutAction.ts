"use server"

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

const addTodo = async (formData: FormData) => {
    const todo = formData.get('todo') as string;

    try {
        await prisma.todo.create({
            data: {
                title: todo,
            }
        });
    } catch (error) {
        return error;
    }

    revalidatePath('/todos')
}

export { addTodo }