import HeadTableAcc from "../features/account/HeadTableAcc";

import axios from "../config/axios";
import { useEffect, useState } from "react";
import AccountList from "../features/account/accountList";

export default function AccountPage() {
  const [allAcc, setAllAcc] = useState([]);

  useEffect(() => {
    restateAcc();
  }, []);

  const restateAcc = async () => {
    const res = await axios
      .get("/account")
      .then((res) => setAllAcc(res.data.getacc))
      .catch((err) => console.log(err));
    return res;
  };

  const deleteAcc = async (accountId) => {
    await axios.delete(`/account/delete/${accountId}`);
    setAllAcc(allAcc.filter((el) => el.id != accountId));
  };
  const getPreview = async (id) => {
    await axios
      .get(`/account/${id}`)
      .then((res) => setAllAcc(res.data.newTable));
  };
  return (
    <div className="h-full">
      <div className="flex flex-col p-5 px-5 gap-5">
        <div>
          <HeadTableAcc />
          <AccountList
            allAcc={allAcc}
            deleteAcc={deleteAcc}
            getPreview={getPreview}
          />
        </div>
      </div>
    </div>
  );
}
