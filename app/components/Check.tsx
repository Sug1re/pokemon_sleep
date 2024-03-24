'use client';

import { todo } from 'node:test';
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Check = () => {

  const [taskTitle,setTasktitle] =useState("")

  const handleSubmit = async (e:FormEvent)=> {
    e.preventDefault();

    // await Check({id: "5", text: taskTitle});
    console.log("Task title:", taskTitle);
  };

  return (
    <form className='mb-4 space-y-3' onSubmit={handleSubmit}>
      <input
       type="text"
       className='w-hull border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-200'
       onChange={(e:ChangeEvent<HTMLInputElement>) => setTasktitle(e.target.value)}
      />
    <div>
     <button className='w-hull  px-20 py-2 text-white bg-blue-400 rounded  transform hover:bg-blue-500 hover:scale-95 duration-200'>
        Check
     </button>
    </div>
    </form>
  )
}

export default Check;
