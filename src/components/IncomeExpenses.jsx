import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import { Transaction } from "./Transaction";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const incomeTransactions = transactions.filter(transaction => transaction.amount > 0);
  const expenseTransactions = transactions.filter(transaction => transaction.amount < 0);
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(incomeTransactions);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="income-expense">
      <div className="incomes_container">
        <h3>Income</h3>
        <p className="money plus">{income}</p>
        <ul className="income-list">
          {incomeTransactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
      <div className="expenses_container">
        <h3>Expense</h3>
        <p className="money minus">{expense}</p>
        <ul className="income-list">
          {expenseTransactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IncomeExpenses;
