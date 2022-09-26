import React, {useContext} from "react"
import { GlobalContext } from "../context/Globalstate"


function Balance() {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    
    const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);

    return(
    <>
       <h3>Balance</h3>
        <h1>${total}</h1>
    </>
    )
  
}
export default Balance