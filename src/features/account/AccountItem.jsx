import { useNavigate } from "react-router-dom";
import { CancelIaon, Preview } from "../../icon/icon";
import { useState } from "react";

export default function AccountItem({ accObj, deleteAcc, getPreview }) {
  const [input, setInput] = useState({
    id: "",
  });
  const navigete = useNavigate();
  console.log(accObj);
  const handleClickDelete = () => {
    deleteAcc(accObj.id);
  };
  const handleClickPreview = () => {
    getPreview(input.id);
    navigete(`/account/${input.id}`);
  };
  console.log(setInput);

  return (
    <div className="flex px-20 w-full items-center justify-center">
      <div className="w-36 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {accObj.id}
      </div>
      <div className="w-36 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {accObj.IntegratedTable[0].invoice}
      </div>
      <div className="w-72 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {accObj.IntegratedTable[0].customer.customerName}
      </div>
      <div className="flex-1 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {accObj.billing}
      </div>
      <div className="w-64 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden">
        {accObj.totalPrice}
      </div>
      <div
        className="w-20 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden cursor-pointer"
        onClick={handleClickDelete}
      >
        <CancelIaon />
      </div>
      <div
        className="w-24 h-10 flex justify-center items-center bg-gray-100 p-1.5 border border-solid overflow-hidden cursor-pointer"
        onClick={handleClickPreview}
      >
        <Preview />
      </div>
    </div>
  );
}
