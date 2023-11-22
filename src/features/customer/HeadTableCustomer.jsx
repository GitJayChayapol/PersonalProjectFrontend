export default function HeadTableCustomer() {
  return (
    <div className="flex px-2 w-full justify-center">
      <div className="w-52 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white h-10 overflow-hidden">
        Customer Name
      </div>
      <div className="w-32 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white h-10 overflow-hidden">
        Customer Call
      </div>
      <div className="flex w-1/3 justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white h-10 overflow-hidden">
        Address
      </div>
      <div className="w-44 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white h-10 overflow-hidden">
        Identification
      </div>
      <div className="w-28 flex justify-center  bg-blue-950 p-1.5 border border-solid border-gray-400 text-white h-10 overflow-hidden">
        Contact
      </div>
      <div className="w-10 bg-blue-950 p-1.5 flex items-center border border-solid border-gray-400 text-white h-10 overflow-hidden">
        Edit
      </div>
    </div>
  );
}
