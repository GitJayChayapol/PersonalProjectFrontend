import AccountItem from "./accountItem";

export default function AccountList({ allAcc, deleteAcc, getPreview }) {
  return (
    <div>
      {allAcc.map((el) => (
        <AccountItem
          key={el.id}
          accObj={el}
          deleteAcc={deleteAcc}
          getPreview={getPreview}
        />
      ))}
    </div>
  );
}
