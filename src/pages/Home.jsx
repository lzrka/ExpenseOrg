import React from "react";
import Balance from "../components/Balance";
import IncomeExpenses from "../components/IncomeExpenses";
import AddTransaction from "../components/AddTransaction";
import { GlobalProvider } from "../context/Globalstate";

function Home() {
  return (
    <GlobalProvider>
      <br></br>
      <Balance />
      <br></br>
      <AddTransaction />
      <IncomeExpenses />
    </GlobalProvider>
  );
}

export default Home;
