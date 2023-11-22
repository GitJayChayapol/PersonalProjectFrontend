import axios from "../config/axios";
import { useState } from "react";
import PreviewItem from "./PreviewItem";

export default function PreviewPage() {
  const [data, setData] = useState([]);

  const getPreview = async (id) => {
    await axios.get(`/account/${id}`).then((res) => {
      setData(res.data.newTable);
    });
  };

  getPreview(48);
  console.log(getPreview(48));
  return (
    <div className="h-screen flex flex-col items-center p-10 gap-5">
      <div className=" w-5/6 border border-solid border-black p-5 flex flex-col justify-center items-center gap-5 rounded-2xl">
        <div className="text-5xl font-bold">Code Camp Logistics</div>
        <div className="text-3xl">Bangkok</div>
        <div className="text-2xl">Tax: 1212312121</div>
      </div>
      <div className="w-5/6 border border-solid border-black p-5 rounded-2xl flex flex-col gap-4">
        <div className="text-5xl">customer</div>
        <div className="text-3xl">
          {/* customer Name: {data[0].customer.customerName} */}
        </div>
        <div className="text-2xl">
          {/* customer Address: {data[0].customer.customerAddress} */}
        </div>
        <div className="text-2xl">
          {/* customer Tax:{data[0].customer.taxIdentification} */}
        </div>
      </div>
      <div className="w-5/6">
        <div className="flex">
          <div className="w-44 flex justify-center items-center text-xl h-10 border border-solid border-black">
            วันที่
          </div>
          <div className="w-52 flex justify-center items-center text-xl h-10 border border-solid border-black">
            ทะเบียนรถ
          </div>
          <div className="w-72 flex justify-center items-center text-xl h-10 border border-solid border-black">
            ต้นทาง
          </div>
          <div className="w-72 flex justify-center items-center text-xl h-10 border border-solid border-black">
            ปลายทาง
          </div>
          <div className="w-48 flex justify-center items-center text-xl h-10 border border-solid border-black">
            ราคา
          </div>
          <div className="flex flex-1 justify-center items-center text-xl h-10 border border-solid border-black">
            หมายเหตุ
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {data.map((el) => (
          <PreviewItem key={el.id} dataObj={el} />
        ))}
      </div>
      <div className="flex w-5/6">
        <div className="flex flex-1 justify-center items-center text-xl h-10 border border-solid border-black">
          Total Price
        </div>
        <div className=" w-1/4 flex justify-center items-center text-xl h-10 border border-solid border-black font-bold">
          Total Price
        </div>
      </div>
    </div>
  );
}
