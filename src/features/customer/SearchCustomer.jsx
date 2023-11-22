import { useState } from "react";
import ModalCustomer from "./ModalCustomer";
import CreateCustomerForm from "./CreateCustomerForm";

export default function SearchCustomer({
  createCustomer,
  searchCustomerCall,
  restate,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState({
    customerCall: "",
  });
  const handleClickSearch = () => {
    if (input.customerCall == "") {
      return restate();
    }
    searchCustomerCall(input.customerCall);
  };
  const handleChangeInput = (e) => {
    setInput({ [e.target.name]: e.target.value });
  };
  const handleClickCancel = () => {
    restate();
    setInput({ customerCall: "" });
  };
  return (
    <div className="flex w-full gap-2 px-2">
      <div
        className="bg-green-600 p-2 rounded-xl cursor-pointer w-44 flex justify-center items-center text-white font-bold"
        onClick={() => setIsOpen(true)}
      >
        Create Customer
      </div>
      <ModalCustomer
        open={isOpen}
        setopen={setIsOpen}
        onClose={() => setIsOpen(false)}
        createCustomer={createCustomer}
      >
        <CreateCustomerForm />
      </ModalCustomer>
      <input
        type="text"
        placeholder="ค้นหาลูกค้า"
        name="customerCall"
        className="flex flex-1 bg-gray-200 rounded-2xl px-4"
        onChange={handleChangeInput}
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
