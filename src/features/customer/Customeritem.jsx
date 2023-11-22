import { useState } from "react";
import { EditIcon } from "../../icon/icon";
import EditCustomerFrom from "./EditCustomerForm";
import ModalEditCustomer from "./ModalEditCustomer";

export default function Customeritem({
  customerObj,
  editCustomer,
  deleteCustomer,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex px-2 w-full justify-center">
      <div className="w-52 flex justify-center bg-gray-100 p-1.5 border border-solid h-10 overflow-hidden">
        {customerObj.customerName}
      </div>
      <div className="w-32 flex justify-center bg-gray-100 p-1.5 border border-solid h-10 overflow-hidden">
        {customerObj.customerCall}
      </div>
      <div className=" flex w-1/3 justify-center bg-gray-100 p-1.5 border border-solid h-10 overflow-hidden">
        {customerObj.customerAddress}
      </div>
      <div className="w-44 flex justify-center bg-gray-100 p-1.5 border border-solid h-10 overflow-hidden">
        {customerObj.taxIdentification}
      </div>
      <div className="w-28 flex justify-center bg-gray-100 p-1.5 border border-solid h-10 overflow-hidden">
        {customerObj.customerPhone}
      </div>
      <div
        className="flex w-10 justify-center items-center bg-gray-100 p-2 border border-solid cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="h-4 flex justify-center items-center">
          <EditIcon />
        </div>
      </div>
      <ModalEditCustomer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        editCustomer={editCustomer}
        customerObj={customerObj}
        setopen={setIsOpen}
        deleteCustomer={deleteCustomer}
      >
        <EditCustomerFrom />
      </ModalEditCustomer>
    </div>
  );
}
