import { useState } from "react";
import { EditIcon, PenddingIcon, TrueIcon } from "../../icon/icon";
import EditTodoForm from "./EditTodoForm";
import ModalEditTodo from "./ModalEditTodo";
export default function TodoList({
  editTodo,
  postObj,
  deleteTodo,
  carCalls,
  driverNames,
  customerNames,
  updateStatus,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickStatus = async () => {
    updateStatus(postObj.id);
  };

  return (
    <div className="flex px-2 text-xs">
      <div
        className="w-20 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden cursor-pointer"
        onClick={handleClickStatus}
      >
        {postObj.status === "DONE" ? <TrueIcon /> : <PenddingIcon />}
      </div>
      <div className="w-28 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {postObj.date.split("T")[0]}
      </div>
      <div className="w-28 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {postObj.customer.customerCall}
      </div>
      <div className="w-36 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {postObj.car.carRegistration}
      </div>
      <div className="w-28 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {postObj.driver.driverCall}
      </div>
      <div className="flex-1 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {postObj.origin}
      </div>
      <div className="flex-1 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {postObj.destination}
      </div>
      <div className="w-28 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {postObj.price}
      </div>
      <div className="w-28 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {postObj.invoice}
      </div>
      <div
        className="flex w-20 h-10 justify-center items-center bg-gray-100 p-2 border border-solid cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="h-4 flex justify-center items-center">
          <EditIcon />
        </div>
      </div>
      <ModalEditTodo
        deleteTodo={deleteTodo}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        postObj={postObj}
        setopen={setIsOpen}
        editTodo={editTodo}
        driverNames={driverNames}
        carCalls={carCalls}
        customerNames={customerNames}
      >
        <EditTodoForm />
      </ModalEditTodo>
    </div>
  );
}
