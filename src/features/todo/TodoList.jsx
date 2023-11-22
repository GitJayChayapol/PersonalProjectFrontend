import Todoitem from "../todo/Todoitem";
export default function TodoList({
  allTodo,
  deleteTodo,
  editTodo,
  carCalls,
  driverNames,
  customerNames,
  updateStatus,
}) {
  return (
    <div>
      {allTodo.map((el) => (
        <Todoitem
          key={el.id}
          postObj={el}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          driverNames={driverNames}
          carCalls={carCalls}
          customerNames={customerNames}
          updateStatus={updateStatus}
        />
      ))}
    </div>
  );
}
