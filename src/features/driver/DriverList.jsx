import Driveritem from "./Driveritem";

export default function DriverList({ allDriver, editDriver, deleteDriver }) {
  return (
    <div>
      {allDriver.map((el) => (
        <Driveritem
          key={el.id}
          driverObj={el}
          editDriver={editDriver}
          deleteDriver={deleteDriver}
        />
      ))}
    </div>
  );
}
