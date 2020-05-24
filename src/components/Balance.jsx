import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);

  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <Typography variant="h3">Balance</Typography>

      <Typography variant="h4">Rs {total}</Typography>
      <Divider />
      <br />
    </>
  );
};
