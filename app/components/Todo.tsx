import React from 'react'
import { Task } from '../types';

interface TodoProps {
    todo: Task;
}
const Todo = ({ todo}: TodoProps) => {
  return (
    <div>
        <li
        key={todo.id}
        className='flex justify-between p-4 bg-white border-l-4 border-red-500 rounded shadow'>
        <span>{todo.text}</span>
        <div>
          <button className='text-green-500 mr-4'>edit</button>
          <button className='text-red-700'>Delete</button>
        </div>
      </li>
    </div>
  )
}

export default Todo;
