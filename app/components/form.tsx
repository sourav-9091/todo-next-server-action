"use client"

import React, { useRef } from 'react'
import { addTodo } from '@/app/actions/todoPutAction'
import Button from './button';

export default function Form() {
    const ref = useRef<HTMLFormElement>(null);
    return (
        <form ref={ref} action={async formData => {
            ref.current?.reset();
            await addTodo(formData); 
        }} className="flex flex-col w-[300px] my-16">
            <input
                type="text"
                name="todo"
                className='px-4 py-2 mb-3 text-black text-xl text-center border-2 border-gray-300 rounded'
                placeholder='Write The Todo'
                required
            />
            <Button />
        </form>
    )
}
