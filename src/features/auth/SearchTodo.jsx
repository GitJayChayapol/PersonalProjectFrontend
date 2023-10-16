export default function SearchTodo() {
  return (
    <div className="flex w-full gap-2 px-2">
      <div className="bg-gray-700 p-2 rounded-xl cursor-pointer w-36 flex justify-center items-center text-white">
        All
      </div>
      <div className="bg-gray-500 p-2 rounded-xl cursor-pointer w-36 flex justify-center items-center text-white">
        Accept
      </div>
      <div className="bg-gray-300 p-2 rounded-xl cursor-pointer w-36 flex justify-center items-center">
        Pending
      </div>
      <input
        type="text"
        placeholder="ค้นหาลูกค้า"
        className="flex flex-1 bg-gray-200 rounded-2xl px-4"
      />
      <div className="bg-blue-500 p-w rounded-xl cursor-pointer w-36 flex justify-center items-center">
        Search
      </div>
    </div>
  );
}
