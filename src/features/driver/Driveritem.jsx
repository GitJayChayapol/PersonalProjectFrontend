import { useState } from "react";
import { EditIcon } from "../../icon/icon";
import ModalEditDriver from "./ModalEditDriver";
import EditDriverForm from "./EditDriverForm";

export default function Driveritem({ driverObj, editDriver, deleteDriver }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex px-2 w-full items-center justify-center">
      <div className="w-52 flex justify-center bg-gray-100 p-1.5 border border-solid">
        {driverObj.driverFirstName}
      </div>
      <div className="w-52 flex justify-center bg-gray-100 p-1.5 border border-solid">
        {driverObj.driverLastName}
      </div>
      <div className="w-32 flex justify-center bg-gray-100 p-1.5 border border-solid">
        {driverObj.gender}
      </div>
      <div className="w-56 flex justify-center bg-gray-100 p-1.5 border border-solid">
        {driverObj.brithDay.split("T")[0]}
      </div>
      <div className="w-52 flex justify-center bg-gray-100 p-1.5 border border-solid ">
        {driverObj.identification}
      </div>
      <div
        className="flex w-10 justify-center items-center bg-gray-100 p-2 border border-solid cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="h-5 flex justify-center items-center">
          <EditIcon />
        </div>
      </div>
      <ModalEditDriver
        open={isOpen}
        onClose={() => setIsOpen(false)}
        driverObj={driverObj}
        editDriver={editDriver}
        setopen={setIsOpen}
        deleteDriver={deleteDriver}
      >
        <EditDriverForm />
      </ModalEditDriver>
    </div>
  );
}
