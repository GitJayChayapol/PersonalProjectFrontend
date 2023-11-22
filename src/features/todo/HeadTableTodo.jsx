export default function HeadTableTodo() {
  return (
    <div className="flex px-2 w-full items-center justify-center">
      <div className="w-20 h-10 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        Status
      </div>
      <div className="w-28 h-10 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        วันที่
      </div>
      <div className="w-28 h-10 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        ลูกค้า
      </div>
      <div className="w-36 h-10 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        ทะเบียนรถ
      </div>
      <div className="w-28 h-10 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        ผู้ขับขี่
      </div>
      <div className="flex-1 h-10 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        ต้นทาง
      </div>
      <div className="flex-1 h-10 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        ปลายทาง
      </div>
      <div className="w-28 h-10 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        ราคา
      </div>
      <div className="w-28 h-10 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        Invoice
      </div>
      <div className="w-20 h-10 bg-blue-950 p-1.5 flex justify-center items-center border border-solid border-gray-400 text-white">
        Edit
      </div>
    </div>
  );
}
