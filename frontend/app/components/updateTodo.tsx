'use client';
import React, { useEffect, useState } from 'react';
import { MdOutlineDownloadDone } from 'react-icons/md';
import { updateTodo } from '../api/update-todo';
import { useGlobalContext } from '../context/store';
import { fetchData } from '../api/fetch-todos';

const UpdateTodo = (prompt: { valueTodo: string; idTodo: string }) => {
  const [todo, setTodo] = useState('');
  const { setTodos, setUpdateIndex } = useGlobalContext();
  useEffect(() => {
    setTodo(prompt.valueTodo);
  }, []);
  return (
    <div className="flex items-center bg-[#F6F7FA] border rounded-sm md:w-[50%] ml-2">
      <input
        className="bg-[#F6F7FA] m-1  flex flex-grow  
                text-black placeholder-gray-600 text-sm outline-none"
        type="text"
        placeholder="update Todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></input>
      <MdOutlineDownloadDone
        className="text-green-600 mr-2 cursor-pointer"
        onClick={async () => {
          const tm = await updateTodo(prompt.idTodo, { todo });
          setUpdateIndex(-1);
        }}
      />
    </div>
  );
};

export default UpdateTodo;
