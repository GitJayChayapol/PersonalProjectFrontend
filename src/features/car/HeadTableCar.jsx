export default function HeadTableCar() {
  return (
    <div className="flex px-2 w-full justify-center">
      <div className="w-44 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white h-10 overflow-hidden">
        CarId
      </div>

      <div className="w-32 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white h-10 overflow-hidden">
        Brand
      </div>
      <div className="w-32 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white h-10 overflow-hidden">
        Model
      </div>
      <div className="w-28 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white h-10 overflow-hidden">
        Type
      </div>
      <div className="w-28 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white h-10 overflow-hidden">
        Temp Max
      </div>
      <div className="w-10 bg-blue-950 p-1.5 flex items-center border border-solid border-gray-400 text-white h-10 ">
        Edit
      </div>
    </div>
  );
}
