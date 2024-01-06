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
// const [updateIndex, setUpdateIndex] = useState(-1);
interface ContextProps {
  todos: TodoDto[] | [];
  setTodos: Dispatch<SetStateAction<TodoDto[]>>;
  updateIndex: number;
  setUpdateIndex: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps>({
  todos: [],
  setTodos: () => {},
  updateIndex: -1,
  setUpdateIndex: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todos, setTodos] = useState<TodoDto[] | []>([]);
  const [updateIndex, setUpdateIndex] = useState<number>(-1);

  useEffect(() => {
    const getData = async () => {
      const temp = await fetchData();
      setTodos(temp);
    };
    if (updateIndex < 0) getData();
  }, [updateIndex]);

  return (
    <GlobalContext.Provider
      value={{
        todos,
        setTodos,
        updateIndex,
        setUpdateIndex,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
