import { useState } from "react";
import InputErrorMessage from "../auth/InputErrorMessage";
import TodoInput from "./TodoInput";
import { useAuth } from "../../hook/use-auth";

export default function CreateTodoForm({
  onClose,
  setopen,
  createTodo,
  carCalls,
  driverNames,
  customerNames,
}) {
  const { authUser } = useAuth();
  const [input, setInput] = useState({
    date: "",
    carId: "",
    driverId: "",
    customerId: "",
    origin: "",
    destination: "",
    detial: "",
    price: "",
    userId: authUser.id,
  });

  const [error, setError] = useState({});

  const handleSumitForm = (e) => {
    e.preventDefault();
    const { error } = input;
    if (error) {
      return setError(error);
    }
    createTodo(input);
    setopen(false);
  };
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSumitForm}>
      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <span>วันที่ :</span>
          <TodoInput
            type="date"
            value={input.date}
            onChange={handleChangeInput}
            name="date"
            hasError={error.date}
            placeholder="date"
          />
          {error.date && <InputErrorMessage message={error.date} />}
        </div>
        <div className="flex flex-col">
          <span>ทะเบียนรถ :</span>
          <select
            name="carId"
            value={input.carId.id}
            onChange={handleChangeInput}
            className="block w-96 rounded-md px-4 py-3.5 outline-none border border-gray-300"
          >
            <option value=""> ทะเบียนรถ</option>
            {carCalls.map((carId) => {
              return (
                <option key={carId.id} value={carId.id}>
                  {carId.name}
                </option>
              );
            })}
          </select>
          {error.carId && <InputErrorMessage message={error.carId} />}
        </div>
        <div className="flex flex-col">
          <span>ผู้ขับขี่ :</span>
          <select
            name="driverId"
            value={input.driverId.id}
            onChange={handleChangeInput}
            className="block w-96 rounded-md px-4 py-3.5 outline-none border border-gray-300"
          >
            <option value=""> ชื่อผู้ขับชี่</option>
            {driverNames.map((driverId) => {
              return (
                <option key={driverId.name} value={driverId.id}>
                  {driverId.name}
                </option>
              );
            })}
          </select>
          {error.driverId && <InputErrorMessage message={error.driverId} />}
        </div>
        <div>
          <span>ลูกค้า :</span>
          <select
            name="customerId"
            value={input.customerId.id}
            onChange={handleChangeInput}
            className="block w-96 rounded-md px-4 py-3.5 outline-none border border-gray-300"
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
          {error.customerId && <InputErrorMessage message={error.customerId} />}
        </div>
        <div>
          <span>ต้นทาง :</span>
          <TodoInput
            value={input.origin}
            onChange={handleChangeInput}
            name="origin"
            hasError={error.origin}
            placeholder="ต้นทาง"
          />
          {error.origin && <InputErrorMessage message={error.origin} />}
        </div>

        <div>
          <span>ปลายทาง :</span>
          <TodoInput
            value={input.destination}
            onChange={handleChangeInput}
            name="destination"
            hasError={error.destination}
            placeholder="ปลายทาง"
          />
          {error.destination && (
            <InputErrorMessage message={error.destination} />
          )}
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <span>ราคา :</span>
          <input
            placeholder="ราคา"
            value={input.price}
            onChange={handleChangeInput}
            name="price"
            className={`block w-44 rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-1 focus:ring-red-900
            ${
              error.price
                ? "border-red-500 focus:ring-red-300"
                : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"
            }`}
          />
          {error.price && <InputErrorMessage message={error.price} />}
        </div>
        <div className="flex w-full flex-col">
          <span>รายละเอียด :</span>
          <input
            placeholder="รายละเอียด"
            value={input.detial}
            onChange={handleChangeInput}
            name="detial"
            className={`block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-1 focus:ring-red-900
            ${
              error.detial
                ? "border-red-500 focus:ring-red-300"
                : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"
            }`}
          />
          {error.detial && <InputErrorMessage message={error.detial} />}
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex w-full items-center">
          <input
            placeholder="userId"
            value={input.userId}
            onChange={handleChangeInput}
            name="userId"
            className={`block w-10 h-5 rounded-md px-2 py-2 outline-none border border-gray-300 focus:ring-1 focus:ring-red-900 invisible
            ${
              error.userId
                ? "border-red-500 focus:ring-red-300"
                : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"
            }`}
          />
          {error.userId && <InputErrorMessage message={error.userId} />}
        </div>

        <div className="flex justify-end gap-3 w-full pt-2">
          <button className="bg-green-600 p-2 rounded-md font-semibold w-36 text-white shadow-lg">
            Create
          </button>
          <button
            className="bg-red-500 p-2 rounded-md font-semibold w-36 text-white shadow-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
