
import React from "react"
import Balance from "../components/Balance"
import IncomeExpenses from "../components/IncomeExpenses"
import TransactionList from "../components/TransactionList"
import AddTransaction from "../components/AddTransaction"
import "./Home.css"

function Home() {

    return (
        <div>
            <h1>Home</h1>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
        </div>

    )
}

export default Home