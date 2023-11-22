export default function PreviewItem({ dataObj }) {
  console.log(dataObj);
  return (
    <div className=" w-5/6 ">
      <div>
        <div className="flex">
          <div className="w-44 flex justify-center items-center text-xl h-10 border border-solid border-black">
            {dataObj.date.split("T")[0]}
          </div>
          <div className="w-52 flex justify-center items-center text-xl h-10 border border-solid border-black">
            {dataObj.car.carRegistration}
          </div>
          <div className="w-72 flex justify-center items-center text-xl h-10 border border-solid border-black">
            {dataObj.origin}
          </div>
          <div className="w-72 flex justify-center items-center text-xl h-10 border border-solid border-black">
            {dataObj.destination}
          </div>
          <div className="w-48 flex justify-center items-center text-xl h-10 border border-solid border-black">
            {dataObj.price}
          </div>
          <div className="flex flex-1 justify-center items-center text-xl h-10 border border-solid border-black"></div>
        </div>
      </div>
    </div>
  );
}
