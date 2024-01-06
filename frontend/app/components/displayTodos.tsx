'use client';
import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { fetchData } from '../api/fetch-todos';
import { changeStatus } from '../api/changeStatus';
import { deleteTodo } from '../api/delete-todo';
import { useGlobalContext } from '../context/store';

const DisplayTodos = () => {
  const { todos, setTodos } = useGlobalContext();

  return (
    <div className=" w-[50%] rounded-md bg-white mt-3 flex flex-col py-3 ">
      {todos.map((todo: any, index) => {
        return (
          <div key={index} className="flex  justify-between mx-2 mt-2">
            <div className="w-[90%] flex">
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => {
                  changeStatus(todo.id);
                  setTodos((prevTodos: any) => {
                    return prevTodos.map((td: any) =>
                      td.id === todo.id ? { ...td, isDone: !td.isDone } : td,
                    );
                  });
                }}
              />
              <p className="text-black ml-2  ">{todo.todo}</p>
            </div>
            <MdDelete
              className="text-[20px] cursor-pointer text-red-500 hover:text-red-400"
              onClick={() => {
                deleteTodo(todo.id);
                setTodos((prevTodos: any) => {
                  return prevTodos.filter((td: any) => td.id !== todo.id);
                });
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTodos;
