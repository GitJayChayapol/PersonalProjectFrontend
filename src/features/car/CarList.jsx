import Caritem from "./Caritem";

export default function CarList({ editCar, allCar, setsCar, deleteCar }) {
  return (
    <div>
      {allCar.map((el) => (
        <Caritem
          key={el.id}
          allCar={allCar}
          deleteCar={deleteCar}
          carObj={el}
          setsCar={setsCar}
          editCar={editCar}
        />
      ))}
    </div>
  );
}
