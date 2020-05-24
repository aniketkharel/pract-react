import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//need initial state globally access from multiple components
const initialState = {
  transactions: [],
};

//create our context
export const GlobalContext = createContext(initialState);

// provider component to provide global context by wrapping the whole app with the provider\
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "Add_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
