'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { fetchData } from '../api/fetch-todos';

interface ContextProps {
  todos: TodoDto[] | [];
  setTodos: Dispatch<SetStateAction<TodoDto[]>>;
}

const GlobalContext = createContext<ContextProps>({
  todos: [],
  setTodos: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todos, setTodos] = useState<TodoDto[] | []>([]);

  useEffect(() => {
    const getData = async () => {
      const temp = await fetchData();
      setTodos(temp);
    };
    getData();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        todos,
        setTodos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
