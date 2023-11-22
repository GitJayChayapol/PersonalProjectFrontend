import { useState } from "react";
import ModalCar from "./ModalCar";
import CreateCarForms from "./CreateCarForms";

export default function SearchCar({
  setCars,
  createCar,
  searchCarCall,
  restate,
}) {
  const [input, setInput] = useState({
    carCall: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleClickSearch = () => {
    if (input.carCall == "") {
      return restate();
    }
    searchCarCall(input.carCall);
  };

  const handleChangeInput = (e) => {
    setInput({ [e.target.name]: e.target.value });
  };

  const hendleClickCancel = () => {
    restate();
    setInput({ carCall: "" });
  };
  return (
    <div className="flex w-full gap-2 px-2">
      <div
        className="bg-green-600 p-2 rounded-xl cursor-pointer w-44 flex justify-center items-center text-white font-bold"
        onClick={() => setIsOpen(true)}
      >
        Create Car
      </div>
      <ModalCar
        open={isOpen}
        setopen={setIsOpen}
        onClose={() => setIsOpen(false)}
        setCars={setCars}
        createCar={createCar}
      >
        <CreateCarForms />
      </ModalCar>

      <input
        type="text"
        placeholder="ค้นหาทะเบียนรถ"
        name="carCall"
        className="flex flex-1 bg-gray-200 rounded-2xl px-4"
        onChange={handleChangeInput}
      />
      <div
        className="bg-blue-500 p-2 rounded-xl cursor-pointer w-36 flex justify-center items-center text-white shadow-md"
        onClick={handleClickSearch}
      >
        Search
      </div>
      <div
        className="bg-gray-600 p-2 rounded-xl cursor-pointer w-36 flex justify-center items-center text-white"
        onClick={hendleClickCancel}
      >
        Cancel
      </div>
    </div>
  );
}
