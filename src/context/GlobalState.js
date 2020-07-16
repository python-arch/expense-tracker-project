import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state

const intialState = {
  transactions: [],
};

export const GlobalContext = createContext(intialState);

export const GlobalPovider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
