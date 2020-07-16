import React from "react";
import "./App.css";
import { Balance } from "./components/Balance";
import Header from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalPovider } from "./context/GlobalState";

function App() {
  return (
    <GlobalPovider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalPovider>
  );
}

export default App;
