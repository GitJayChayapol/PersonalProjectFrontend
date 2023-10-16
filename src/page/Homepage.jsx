import SearchTodo from "../features/auth/SearchTodo";
import HeadTableTodo from "../features/auth/HeadTableTodo";
import TodoList from "../features/auth/TodoList";
import CreateTodos from "../features/auth/CreateTodos";

export default function Homepage() {
  return (
    <div className=" h-full">
      <div className=" flex flex-col p-5 px-5 gap-2">
        <CreateTodos />
        <SearchTodo />
      </div>
      <div className="flex flex-col flex-1 gap-1 pb-8">
        <HeadTableTodo />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
}
