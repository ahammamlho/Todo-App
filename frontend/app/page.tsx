import Image from "next/image";
import AddTodo from "./components/addTodo";
import DisplayTodos from "./components/displayTodos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <div className="w-[100%] h-screen flex flex-col  items-center">
        <h1 className="font-700 text-[20px] mt-2">TODO List</h1>
        <AddTodo />
        <DisplayTodos />
      </div>
    </main>
  );
}
