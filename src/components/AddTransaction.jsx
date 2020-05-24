import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { GlobalContext } from "../context/GlobalState";
import TextField from "@material-ui/core/TextField";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h5>Add Transaction</h5>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label="Text"
          variant="outlined"
          placeholder="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Amount (-negative expense, +positive income)"
          variant="outlined"
          placeholder="Enter amount.."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <Button
          className="btn"
          variant="contained"
          color="primary"
          type="submit"
        >
          Add Transaction
        </Button>
      </form>
    </>
  );
};
