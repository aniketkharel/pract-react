import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionsList } from "./components/TransactionsList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <GlobalProvider>
      <Container fixed>
        <Header title="expensifier" />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionsList />
          <AddTransaction />
        </div>
      </Container>
    </GlobalProvider>
  );
}

export default App;
