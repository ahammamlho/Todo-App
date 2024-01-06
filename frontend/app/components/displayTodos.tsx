'use client';
import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { fetchData } from '../api/fetch-todos';
import { changeStatus } from '../api/changeStatus';
import { deleteTodo } from '../api/delete-todo';
import { useGlobalContext } from '../context/store';
import UpdateTodo from './updateTodo';

const DisplayTodos = () => {
  const { todos, setTodos, updateIndex, setUpdateIndex } = useGlobalContext();

  const [todo, setTodo] = useState('');

  return (
    <div className=" w-[50%] rounded-md bg-white mt-3 flex flex-col py-3 ">
      {todos.map((todo: any, index) => {
        return (
          <div
            key={index}
            className="flex  justify-between mx-2 mt-2 hover:bg-gray-100 p-1 rounded-sm"
          >
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
              {updateIndex === index ? (
                <UpdateTodo valueTodo={todo.todo} idTodo={todo.id} />
              ) : (
                <div
                  className="text-black ml-2  cursor-pointer"
                  onClick={() => {
                    setUpdateIndex(index);
                    setTodo(todo.todo);
                  }}
                >
                  {todo.todo}
                </div>
              )}
            </div>
            <MdDelete
              className="text-[20px] cursor-pointer text-red-500 hover:text-red-400"
              onClick={() => {
                setUpdateIndex(-1);
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
