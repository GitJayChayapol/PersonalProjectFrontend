export default function HeadTableDriver() {
  return (
    <div className="flex px-2 w-full items-center justify-center">
      <div className="w-52 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        Frist Name
      </div>
      <div className="w-52 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        Last Name
      </div>
      <div className="w-32 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        Gender
      </div>
      <div className="w-56 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        Birth Day
      </div>
      <div className="w-52 flex justify-center bg-blue-950 p-1.5 border border-solid border-gray-400 text-white overflow-hidden">
        Identification
      </div>
      <div className="w-10 bg-blue-950 p-1.5 flex items-center border border-solid border-gray-400 text-white">
        Edit
      </div>
    </div>
  );
}
