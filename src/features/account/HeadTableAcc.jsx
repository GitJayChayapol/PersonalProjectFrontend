export default function HeadTableAcc() {
  return (
    <div className="flex px-20 w-full items-center justify-center">
      <div className="w-36 h-10 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        ID
      </div>
      <div className="w-36 h-10 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        Invoice
      </div>
      <div className="w-72 h-10 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        Customer
      </div>
      <div className="flex-1 h-10 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        Account cut-off date
      </div>
      <div className="w-64 h-10 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        TotalPrice
      </div>

      <div className="w-20 h-10 bg-blue-950 p-1.5 flex justify-center items-center border border-solid border-gray-400 text-white">
        Cancel
      </div>
      <div className="w-24 h-10 bg-blue-950 p-1.5 flex justify-center items-center border border-solid border-gray-400 text-white">
        Preview
      </div>
    </div>
  );
}
