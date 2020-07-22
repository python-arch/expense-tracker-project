import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = numberWithCommas(
    amounts.reduce((prev, curr) => (prev += curr), 0).toFixed(2)
  );

  return (
    <React.Fragment>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </React.Fragment>
  );
};
