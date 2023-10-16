export default function TodoList() {
  return (
    <div className="flex px-2">
      <div className="w-28 flex justify-center bg-gray-100 p-1.5 border border-solid">
        วันที่
      </div>
      <div className="w-28 flex justify-center bg-gray-100 p-1.5 border border-solid">
        ลูกค้า
      </div>
      <div className="w-28 flex justify-center bg-gray-100 p-1.5 border border-solid">
        ทะเบียนรถ
      </div>
      <div className="w-28 flex justify-center bg-gray-100 p-1.5 border border-solid">
        ผู้ขับขี่
      </div>
      <div className="w-28 flex justify-center bg-gray-100 p-1.5 border border-solid">
        Invoice
      </div>
      <div className="w-52 flex justify-center bg-gray-100 p-1.5 border border-solid">
        ต้นทาง
      </div>
      <div className="w-52 flex justify-center bg-gray-100 p-1.5 border border-solid">
        ปลายทาง
      </div>
      <div className="w-28 flex justify-center bg-gray-100 p-1.5 border border-solid">
        ราคา
      </div>
      <div className=" flex flex-1 justify-center bg-gray-100 p-1.5 border border-solid">
        หมายเหตุ
      </div>
    </div>
  );
}
