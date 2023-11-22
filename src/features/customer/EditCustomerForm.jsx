import { useState } from "react";
import CustomerInput from "./CustomerInput";
import InputErrorMessage from "../auth/InputErrorMessage";

export default function EditCustomerForm({
  onClose,
  editCustomer,
  customerObj,
  setopen,
}) {
  const [input, setInput] = useState({
    customerName: customerObj.customerName,
    customerCall: customerObj.customerCall,
    customerAddress: customerObj.customerAddress,
    taxIdentification: customerObj.taxIdentification,
    customerPhone: customerObj.customerPhone,
  });
  const [error, setError] = useState({});
  const handdleSubmitForm = (e) => {
    e.preventDefault();
    editCustomer(customerObj.id, input);
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
    <form className="flex flex-col gap-4 " onSubmit={handdleSubmitForm}>
      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <span>Customer Name :</span>
          <CustomerInput
            value={input.customerName}
            onChange={handdleChangeInput}
            name="customerName"
            hasError={error.customerName}
            placeholder="ชื่อบริษัท"
          />
          {error.customerName && (
            <InputErrorMessage message={error.customerName} />
          )}
        </div>
        <div>
          <span>Customer call :</span>
          <CustomerInput
            value={input.customerCall}
            onChange={handdleChangeInput}
            name="customerCall"
            hasError={error.customerCall}
            placeholder="นามเรียกขาล"
          />
          {error.customerCall && (
            <InputErrorMessage message={error.customerCall} />
          )}
        </div>
        <div>
          <span>Address :</span>
          <CustomerInput
            value={input.customerAddress}
            onChange={handdleChangeInput}
            name="customerAddress"
            hasError={error.customerAddress}
            placeholder="ที่อยู่"
          />
          {error.customerAddress && (
            <InputErrorMessage message={error.customerAddress} />
          )}
        </div>
        <div>
          <span>Tax :</span>
          <CustomerInput
            value={input.taxIdentification}
            onChange={handdleChangeInput}
            name="taxIdentification"
            hasError={error.taxIdentification}
            placeholder="เลขประจำตัวผู้เสียภาษี"
          />
          {error.taxIdentification && (
            <InputErrorMessage message={error.taxIdentification} />
          )}
        </div>
        <div>
          <span>Customer Contact :</span>
          <CustomerInput
            value={input.customerPhone}
            onChange={handdleChangeInput}
            name="customerPhone"
            hasError={error.customerPhone}
            placeholder="เบอร์โทรลูกค้า"
          />
          {error.customerPhone && (
            <InputErrorMessage message={error.customerPhone} />
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
