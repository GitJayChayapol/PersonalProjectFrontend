import { useState } from "react";
import CarInput from "./CarInput";
import InputErrorMessage from "../auth/InputErrorMessage";

export default function CreateCarForm({ onClose, setopen, createCar }) {
  const [input, setInput] = useState({
    carRegistration: "",
    carCall: "",
    brand: "",
    model: "",
    typeTruck: "",
    temperatureMax: "",
  });
  const [error, setError] = useState({});

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { error } = input;
    if (error) {
      return setError(error);
    }
    createCar(input);
    setopen(false);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form className=" flex flex-col gap-4" onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span>Car Id :</span>
          <CarInput
            value={input.carRegistration}
            onChange={handleChangeInput}
            name="carRegistration"
            hasError={error.carRegistration}
            placeholder="ทะเบียนรถ"
          />
          {error.carRegistration && (
            <InputErrorMessage message={error.carRegistration} />
          )}
        </div>
        <div>
          <span>Car call :</span>
          <CarInput
            value={input.carCall}
            onChange={handleChangeInput}
            name="carCall"
            hasError={error.carCall}
            placeholder="ชื่อย่อรถยนต์"
          />
          {error.carCall && <InputErrorMessage message={error.carCall} />}
        </div>
        <div>
          <span>Brand :</span>
          <CarInput
            value={input.brand}
            onChange={handleChangeInput}
            name="brand"
            hasError={error.brand}
            placeholder="Brand"
          />
          {error.brand && <InputErrorMessage message={error.brand} />}
        </div>
        <div>
          <span>model :</span>
          <CarInput
            value={input.model}
            onChange={handleChangeInput}
            name="model"
            hasError={error.model}
            placeholder="model"
          />
          {error.model && <InputErrorMessage message={error.model} />}
        </div>
        <div>
          <span>Type :</span>
          <CarInput
            value={input.typeTruck}
            onChange={handleChangeInput}
            name="typeTruck"
            hasError={error.typeTruck}
            placeholder="Type"
          />
          {error.typeTruck && <InputErrorMessage message={error.typeTruck} />}
        </div>
        <div>
          <span>Temperature :</span>
          <CarInput
            value={input.temperatureMax}
            onChange={handleChangeInput}
            name="temperatureMax"
            hasError={error.temperatureMax}
            placeholder="อุณหภูมิที่สามารถทำได้"
          />
          {error.temperatureMax && (
            <InputErrorMessage message={error.temperatuerMax} />
          )}
        </div>
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
    </form>
  );
}
