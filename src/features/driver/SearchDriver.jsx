import ModalDriver from "./ModalDriver";
import CreateDriverFrom from "./CreateDriverFrom";
import { useState } from "react";

export default function SearchCar({ createDriver, searchDriverCall, restate }) {
  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState({
    driverFirstName: "",
  });

  const handleClickSearch = () => {
    if (input.driverFirstName == "") {
      return restate();
    }
    searchDriverCall(input.driverFirstName);
  };

  const handleChangInput = (e) => {
    setInput({ [e.target.name]: e.target.value });
  };

  const handleClickCancel = () => {
    restate();
    setInput({ driverFirstName: "" });
  };
  return (
    <div className="flex w-full gap-2 px-2">
      <div
        className="bg-green-600 p-2 rounded-xl cursor-pointer w-44 flex justify-center items-center text-white font-bold"
        onClick={() => setIsOpen(true)}
      >
        Create Driver
      </div>
      <ModalDriver
        open={isOpen}
        setopen={setIsOpen}
        onClose={() => setIsOpen(false)}
        createDriver={createDriver}
      >
        <CreateDriverFrom />
      </ModalDriver>
      <input
        type="text"
        placeholder="ค้นหาผู้ขับขี่"
        name="driverFirstName"
        className="flex flex-1 bg-gray-200 rounded-2xl px-4"
        onChange={handleChangInput}
      />
      <div
        className="bg-blue-500 p-w rounded-xl cursor-pointer w-36 flex justify-center items-center  text-white shadow-md"
        onClick={handleClickSearch}
      >
        Search
      </div>
      <div
        className="bg-gray-600 p-2 rounded-xl cursor-pointer w-36 flex justify-center items-center text-white"
        onClick={handleClickCancel}
      >
        Cancel
      </div>
    </div>
  );
}
