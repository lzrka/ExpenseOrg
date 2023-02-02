
import React from "react"
import Balance from "../components/Balance"
import IncomeExpenses from "../components/IncomeExpenses"
import TransactionList from "../components/TransactionList"
import AddTransaction from "../components/AddTransaction"
import { GlobalProvider } from "../context/Globalstate"

function Home() {

    return (
        <GlobalProvider>


            <h1>Home</h1>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />

        </GlobalProvider>

    )
}

export default Home
