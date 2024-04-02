"use client"

import React from 'react'
import { addTodo } from '@/app/actions/todoPutAction'

export default function Form() {
    return (
        <form action={addTodo} className="flex flex-col w-[300px] my-16">
            <input
                type="text"
                name="todo"
                className='px-4 py-2 mb-3 text-black'
                placeholder='Write The Todo'
                required
            />
            <button className='bg-blue-500 rounded px-4 py-2 text-white font-semibold'>ADD</button>
        </form>
    )
}
