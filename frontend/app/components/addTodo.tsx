'use client';
import React, { useState } from 'react';
import { createTodo } from '../api/create-todo';
import { useGlobalContext } from '../context/store';
import { fetchData } from '../api/fetch-todos';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const { setTodos } = useGlobalContext();
  return (
    <div className="h-[7rem] w-[50%] rounded-md bg-white mt-3 flex flex-col items-center justify-center">
      <div className="flex bg-[#F6F7FA] border rounded-[10px]   md:w-[50%]">
        <input
          className="bg-[#F6F7FA] m-1 p-1 flex flex-grow  
                text-black placeholder-gray-600 text-sm outline-none"
          type="text"
          placeholder="What would you like to do?"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        ></input>
      </div>
      <div
        className="bg-green-600 hover:bg-green-500 px-7 rounded-md mt-4 cursor-pointer"
        onClick={async () => {
          if (todo.length !== 0) {
            createTodo({ todo: todo });
            const temp = await fetchData();
            setTodos(temp);
            setTodo('');
          }
        }}
      >
        Add
      </div>
    </div>
  );
};

export default AddTodo;
