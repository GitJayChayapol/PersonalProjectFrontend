import { useState } from "react";
import DriverInput from "./DriverInput";
import InputErrorMessage from "../auth/InputErrorMessage";

export default function EditDriverForm({
  onClose,
  driverObj,
  editDriver,
  setopen,
}) {
  const [input, setInput] = useState({
    driverFirstName: driverObj.driverFirstName,
    driverLastName: driverObj.driverLastName,
    driverCall: driverObj.driverCall,
    gender: driverObj.gender,
    brithDay: driverObj.brithDay.split("T")[0],
    identification: driverObj.identification,
  });
  const [error, setError] = useState({});

  const handdleSubmitForm = (e) => {
    e.preventDefault();
    editDriver(driverObj.id, input);
    const { error } = input;
    if (error) {
      return setError(error);
    }
    setopen(false);
  };

  const handdleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handdleSubmitForm}>
      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <span>ชื่อจริง :</span>
          <DriverInput
            value={input.driverFirstName}
            onChange={handdleChangeInput}
            name="driverFirstName"
            hasError={error.driverFirstName}
            placeholder="ชื่อจริง"
          />
          {error.driverFirstName && (
            <InputErrorMessage message={error.driverFirstName} />
          )}
        </div>
        <div>
          <span>นามสกุล :</span>
          <DriverInput
            value={input.driverLastName}
            onChange={handdleChangeInput}
            name="driverLastName"
            hasError={error.driverLastName}
            placeholder="นามสกุล"
          />
          {error.driverLastName && (
            <InputErrorMessage message={error.driverLastName} />
          )}
        </div>
        <div>
          <span>ชื่อลงทะเบียน :</span>
          <DriverInput
            value={input.driverCall}
            onChange={handdleChangeInput}
            name="driverCall"
            hasError={error.driverCall}
            placeholder="ชื่อลงทะเบียน"
          />
          {error.driverCall && <InputErrorMessage message={error.driverCall} />}
        </div>
        <div>
          <div>
            <label>เพศ :</label>
            <div>
              <select
                name="gender"
                value={input.gender}
                onChange={handdleChangeInput}
                className="w-full h-12 rounded-md p-2 text-gray-500 flex items-center cursor-pointer"
              >
                <option value="">Select getder</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                {error.gender && <InputErrorMessage message={error.gender} />}
              </select>
            </div>
          </div>
        </div>
        <div>
          <span>วันเกิด :</span>
          <DriverInput
            type="date"
            value={input.brithDay}
            onChange={handdleChangeInput}
            name="brithDay"
            hasError={error.brithDay}
            placeholder="วันเกิด"
          />
          {error.brithDay && <InputErrorMessage message={error.brithDay} />}
        </div>
        <div>
          <span>เลขบัตรประจำตัวประชาชน :</span>
          <DriverInput
            value={input.identification}
            onChange={handdleChangeInput}
            name="identification"
            hasError={error.identification}
            placeholder="เลขบัตรประจำตัวประชาชน"
          />
          {error.identification && (
            <InputErrorMessage message={error.identification} />
          )}
        </div>
      </div>
      <div className="flex justify-end gap-3 w-full pt-2">
        <button className="bg-yellow-600 p-2 rounded-md font-semibold w-36 text-white shadow-lg">
          Edit
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
