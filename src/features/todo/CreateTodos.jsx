import ModalTodo from "./ModalTodo";
import ModalAccount from "../account/ModalAccount";
import CreateTodoForm from "./CreateTodoForm";
import { useState } from "react";
import CreateAccountForm from "../account/CreateAccountForm";

export default function CreateTodos({
  createTodo,
  carCalls,
  driverNames,
  customerNames,
  createAccount,
  allTodo,
  price,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);
  return (
    <div className="flex justify-between w-full px-2">
      <div
        className="bg-green-600 p-2 rounded-xl cursor-pointer w-44 flex justify-center items-center text-white font-bold"
        onClick={() => setIsOpen(true)}
      >
        Create Data
      </div>
      <ModalTodo
        createTodo={createTodo}
        driverNames={driverNames}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        setopen={setIsOpen}
        carCalls={carCalls}
        customerNames={customerNames}
      >
        <CreateTodoForm />
      </ModalTodo>
      <div
        className="bg-yellow-700 p-2 rounded-xl cursor-pointer w-44 flex justify-center items-center text-white font-bold"
        onClick={() => setAccOpen(true)}
      >
        Add To Account
      </div>
      <ModalAccount
        accopen={accOpen}
        onaccClose={() => setAccOpen(false)}
        setaccopen={setAccOpen}
        createAccount={createAccount}
        allTodo={allTodo}
        price={price}
      >
        <CreateAccountForm createAccount={createAccount} />
      </ModalAccount>
    </div>
  );
}
