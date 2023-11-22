import { useEffect, useState } from "react";
import CarList from "../features/car/CarList";
import HeadTableCar from "../features/car/HeadTableCar";
import SearchCar from "../features/car/SearchCar";
import axios from "../config/axios";

export default function Carpage() {
  const [allCar, setAllCar] = useState([]);

  useEffect(() => {
    restate();
  }, []);

  const restate = async () => {
    const res = await axios
      .get("./car")
      .then((res) => {
        setAllCar(res.data.getcar);
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  };
  const createCar = async (input) => {
    try {
      const car = await axios.post("/car/createcar", input);
      setAllCar([...allCar, car.data.datacar]);
      restate();
    } catch (err) {
      console.log(err);
    }
  };

  const editCar = async (carId, input) => {
    try {
      await axios.put(`/car/update/${carId}`, input);
      restate();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCar = async (carid) => {
    try {
      await axios.delete(`/car/delete/${carid}`);
      setAllCar(allCar.filter((el) => el.id != carid));
    } catch (err) {
      console.log(err);
    }
  };

  const searchCarbyCarCall = async (carCall) => {
    try {
      await axios.get(`/car/${carCall}`).then((res) => {
        setAllCar(res.data.getcarById);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full">
      <div className="flex flex-col p-5 px-5 gap-5">
        <SearchCar
          setCars={setAllCar}
          createCar={createCar}
          allCar={allCar}
          searchCarCall={searchCarbyCarCall}
          restate={restate}
        />
        <div>
          <HeadTableCar />
          <CarList
            allCar={allCar}
            setsCar={setAllCar}
            deleteCar={deleteCar}
            editCar={editCar}
          />
        </div>
      </div>
    </div>
  );
}
