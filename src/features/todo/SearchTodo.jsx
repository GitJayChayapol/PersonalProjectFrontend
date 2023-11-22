import { useState } from "react";

export default function SearchTodo({
  searchTodo,
  restateTodo,
  notinvoice,
  getInvoice,
  customerNames,
}) {
  const [input, setInput] = useState({
    id: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleClickAcept = () => {
    getInvoice();
  };
  const handleClickPending = () => {
    notinvoice();
  };
  const handleClickAll = () => {
    restateTodo();
  };
  const handleClickSearch = () => {
    searchTodo(input.id);
  };

  return (
    <div className="flex w-full gap-2 px-2">
      <div
        className="bg-gray-700 p-2 rounded-xl cursor-pointer w-36 flex justify-center items-center text-white"
        onClick={handleClickAll}
      >
        All
      </div>

      <div
        className="bg-gray-300 p-2 rounded-xl cursor-pointer w-36 flex justify-center items-center"
        onClick={handleClickPending}
      >
        Pending
      </div>
      <select
        name="id"
        value={input.id}
        onChange={handleChangeInput}
        className="block w-full rounded-xl px-4 py-3.5 outline-none border border-gray-300 bg-gray-200"
      >
        <option value=""> ชื่อลูกค้า</option>
        {customerNames.map((customerId) => {
          return (
            <option key={customerId.id} value={customerId.id}>
              {customerId.name}
            </option>
          );
        })}
      </select>
      <div
        className="bg-blue-500 p-w rounded-xl cursor-pointer w-48 flex justify-center items-center  text-white shadow-md"
        onClick={handleClickSearch}
      >
        Search
      </div>
      <div
        className="bg-lime-900 p-2 rounded-xl cursor-pointer w-36 flex justify-center items-center text-white"
        onClick={handleClickAcept}
      >
        Accept
      </div>
    </div>
  );
}
