import { useEffect, useState } from "react";
import DriverList from "../features/driver/DriverList";
import HeadTableDriver from "../features/driver/HeadTableDriver";
import SearchDriver from "../features/driver/SearchDriver";
import axios from "../config/axios";

export default function Driverpage() {
  const [allDriver, setAllDriver] = useState([]);

  useEffect(() => {
    restateDriver();
  }, []);

  const restateDriver = async () => {
    const res = await axios
      .get("/driver")
      .then((res) => setAllDriver(res.data.getAlldriver))
      .catch((err) => console.log(err));
    return res;
  };

  const createDriver = async (input) => {
    try {
      const driver = await axios.post("/driver/createdriver", input);
      setAllDriver([...allDriver, driver.data.datadriver]);
      restateDriver();
    } catch (err) {
      console.log(err);
    }
  };

  const editDriver = async (driverId, input) => {
    try {
      await axios.put(`/driver/update/${driverId}`, input);
      restateDriver();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteDriver = async (driverId) => {
    try {
      await axios.delete(`/driver/delete/${driverId}`);
      setAllDriver(allDriver.filter((el) => el.id != driverId));
    } catch (err) {
      console.log(err);
    }
  };

  const searchDriverCall = async (driverName) => {
    try {
      await axios.get(`/driver/${driverName}`).then((res) => {
        setAllDriver(res.data.getdataById);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full">
      <div className="flex flex-col p-5 px-5 gap-5">
        <SearchDriver
          createDriver={createDriver}
          searchDriverCall={searchDriverCall}
          restate={restateDriver}
        />
        <div>
          <HeadTableDriver />
          <DriverList
            allDriver={allDriver}
            editDriver={editDriver}
            deleteDriver={deleteDriver}
          />
        </div>
      </div>
    </div>
  );
}
