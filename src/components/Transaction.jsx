import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li
      key={transaction.id}
      className={transaction.amount < 0 ? "minus" : "plus"}
    >
      {transaction.text} <br />
      <span>
        {sign}Rs. {Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};
