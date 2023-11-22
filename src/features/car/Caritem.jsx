import { useState } from "react";
import { EditIcon } from "../../icon/icon";
import ModalEditCar from "./ModalEditCar";
import EditCarForm from "./EditCarFrom";

export default function Caritem({
  allcar,
  carObj,
  setsCar,
  deleteCar,
  editCar,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex px-2 justify-center">
      <div className="w-44 flex justify-center bg-gray-100 p-1.5 border border-solid h-10 overflow-hidden">
        {carObj.carRegistration}
      </div>
      <div className="w-32 flex justify-center bg-gray-100 p-1.5 border border-solid h-10 overflow-hidden">
        {carObj.brand}
      </div>
      <div className="w-32 flex justify-center bg-gray-100 p-1.5 border border-solid h-10 overflow-hidden">
        {carObj.model}
      </div>
      <div className="w-28 flex justify-center bg-gray-100 p-1.5 border border-solid h-10 overflow-hidden">
        {carObj.typeTruck}
      </div>
      <div className="w-28 flex justify-center bg-gray-100 p-1.5 border border-solid h-10 overflow-hidden">
        {carObj.temperatureMax}
      </div>
      <div
        className="flex w-10 justify-center items-center bg-gray-100 p-2 border border-solid cursor-pointer h-10"
        onClick={() => setIsOpen(true)}
      >
        <div className="h-4 flex justify-center items-center">
          <EditIcon />
        </div>
      </div>
      <ModalEditCar
        open={isOpen}
        onClose={() => setIsOpen(false)}
        setopen={setIsOpen}
        setCars={setsCar}
        carObj={carObj}
        allcar={allcar}
        deleteCar={deleteCar}
        editCar={editCar}
      >
        <EditCarForm />
      </ModalEditCar>
    </div>
  );
}
