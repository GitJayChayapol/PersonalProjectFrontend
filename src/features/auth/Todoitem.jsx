export default function Todoitem() {
  return (
    <div className="flex flex-col gap-1 border shadow-lg p-2 rounded-xl">
      <div className="flex flex-col rounded-xl p-2 bg-gray-800 gap-1">
        <div className="flex justify-between p-3gap-5 items-center">
          <div className="flex gap-2 items-center px-2">
            <span className="text-white">Date:</span>
            <input
              type="text"
              placeholder="วันที่วิ่งงาน"
              className="block w-60 rounded-md px-3 outline-none border border-gray-300 focus:ring-1 focus:ring-red-900"
            />
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-white">Customer:</span>
            <input
              type="text"
              placeholder="นามลูกค้า"
              className="block w-60 rounded-md px-3 outline-none border border-gray-300 focus:ring-1 focus:ring-red-900"
            />
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-white">Car:</span>
            <input
              type="text"
              placeholder="ทะเบียนรถ"
              className="block w-60 h-8 rounded-md px-3  outline-none border border-gray-300 focus:ring-1 focus:ring-red-900"
            />
          </div>
        </div>
        <div className="flex justify-between p-3gap-5 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-white">Origin:</span>
            <input
              type="text"
              placeholder="ต้นทาง"
              className="block w-60 rounded-md px-3 outline-none border border-gray-300 focus:ring-1 focus:ring-red-900"
            />
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-white">Destanation:</span>
            <input
              type="text"
              placeholder="ปลายทาง"
              className="block w-60 rounded-md px-3 outline-none border border-gray-300 focus:ring-1 focus:ring-red-900"
            />
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-white">Price:</span>
            <input
              type="text"
              placeholder="ราคา"
              className="block w-60 h-8 rounded-md px-3  outline-none border border-gray-300 focus:ring-1 focus:ring-red-900"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="detail"
          className="flex flex-1 bg-gray-200 rounded-2xl px-3 items-center"
        />
        <div className="bg-yellow-500 p-w rounded-xl cursor-pointer w-20 flex justify-center items-center">
          Edit
        </div>
        <div className="bg-red-600 p-2 rounded-xl cursor-pointer w-20 flex justify-center items-center">
          Delete
        </div>
        <div className="bg-green-600 p-2 rounded-xl cursor-pointer w-20 flex justify-center items-center">
          Done
        </div>
      </div>
    </div>
  );
}
